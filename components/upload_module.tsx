"use client"

import { useState } from "react"
import { Camera, Check, FileText, Link2, Music2, Upload, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export function UploadModule() {
  const [saved, setSaved] = useState(false)
  return <Card className="border-0 shadow-sm ring-1 ring-border/70">
    <CardHeader className="pb-4"><div className="flex items-center justify-between"><div><CardTitle className="text-xl">Construyamos su historia</CardTitle><CardDescription className="mt-1">Cada recuerdo puede convertirse en un momento de conexión.</CardDescription></div><div className="rounded-xl bg-accent/35 p-3 text-primary"><Users /></div></div></CardHeader>
    <CardContent className="flex flex-col gap-5">
      <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/25 bg-primary/5 px-5 py-7 text-center transition hover:border-primary/50 hover:bg-primary/10"><div className="mb-3 rounded-full bg-white p-3 text-primary shadow-sm"><Upload /></div><p className="font-semibold text-foreground">Arrastra fotos aquí</p><p className="mt-1 text-sm text-muted-foreground">o elige desde tu galería · JPG, PNG hasta 10 MB</p><Button variant="outline" size="sm" className="mt-4 bg-white"><Camera data-icon="inline-start" /> Elegir fotos</Button></div>
      <div className="flex flex-col gap-2"><label htmlFor="memory" className="flex items-center gap-2 text-sm font-semibold"><FileText className="size-4 text-secondary" /> Una anécdota especial</label><Textarea id="memory" placeholder="Papá trabajó 30 años en el Jirón de la Unión, le encantaba ir al cine Metro con mamá los domingos" className="min-h-24 resize-none bg-muted/20" /></div>
      <div className="flex flex-col gap-2"><label htmlFor="song" className="flex items-center gap-2 text-sm font-semibold"><Music2 className="size-4 text-secondary" /> Canción favorita</label><div className="relative"><Link2 className="absolute left-3 top-3 size-4 text-muted-foreground" /><Input id="song" className="pl-9 bg-muted/20" placeholder="Pega un enlace de YouTube o Spotify" /></div></div>
      <div className="flex items-center justify-between gap-3 border-t pt-4"><div className="flex flex-wrap gap-2"><Badge variant="secondary"><Check data-icon="inline-start" /> Contenido protegido</Badge></div><Button onClick={() => setSaved(true)} className="bg-primary hover:bg-primary/90">{saved ? "Guardado" : "Guardar recuerdo"}</Button></div>
      <Button variant="outline" className="w-full border-secondary/35 text-secondary hover:bg-secondary/10"><Users data-icon="inline-start" /> Invitar familiar por WhatsApp</Button>
    </CardContent>
  </Card>
}

export function Contributions() { return <Card className="border-0 shadow-sm ring-1 ring-border/70"><CardHeader><CardTitle className="text-lg">Contribuciones familiares</CardTitle><CardDescription>Los recuerdos que comparten entre todos.</CardDescription></CardHeader><CardContent className="flex flex-col gap-4"><div className="flex items-start gap-3"><div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-primary">M</div><div><p className="text-sm font-semibold">María · hija</p><p className="text-sm text-muted-foreground">3 fotos de la época de trabajo</p></div><Badge variant="outline" className="ml-auto">Hoy</Badge></div><div className="flex items-start gap-3"><div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary/20 font-bold text-secondary">J</div><div><p className="text-sm font-semibold">Jorge · hermano</p><p className="text-sm text-muted-foreground">Canción: Sabor a mí</p></div><Badge variant="outline" className="ml-auto">Ayer</Badge></div></CardContent></Card> }


