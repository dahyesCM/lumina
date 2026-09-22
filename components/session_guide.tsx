"use client"

import { useState } from "react"
import { CheckCircle2, Clock3, Loader2, Pause, Play, Sparkles, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SessionGuide() {
  const [loading, setLoading] = useState(false); const [started, setStarted] = useState(false); const [paused, setPaused] = useState(false)
  const generate = () => { setLoading(true); setTimeout(() => { setLoading(false); setStarted(true) }, 700) }
  return <Card className="overflow-hidden border-0 shadow-sm ring-1 ring-border/70"><div className="h-1.5 bg-gradient-to-r from-primary via-accent to-secondary" /><CardHeader><div className="flex items-center justify-between"><div><CardTitle className="text-xl">Guía de sesión</CardTitle><CardDescription className="mt-1">Una actividad breve, pensada para compartir.</CardDescription></div><div className="rounded-xl bg-secondary/10 p-3 text-secondary"><Sparkles /></div></div></CardHeader><CardContent className="flex flex-col gap-5">
    {!started ? <div className="rounded-xl bg-primary/5 px-5 py-6 text-center"><p className="text-sm text-muted-foreground">Basada en el contenido que tu familia ha compartido</p><Button onClick={generate} disabled={loading} className="mt-4 bg-secondary hover:bg-secondary/90">{loading ? <><Loader2 className="animate-spin" data-icon="inline-start" /> Organizando los recuerdos...</> : <><Sparkles data-icon="inline-start" /> Generar sesión de hoy</>}</Button></div> : <><div className="flex items-center justify-between rounded-xl bg-primary/5 p-4"><div><p className="text-sm font-semibold text-primary">Sesión de hoy</p><p className="text-2xl font-bold text-foreground">15 min</p></div><div className="flex items-center gap-2 text-sm font-semibold text-primary"><Clock3 /> {paused ? "En pausa" : "04:32"}</div></div><Progress value={30} className="h-2" /><ol className="flex flex-col gap-4">{['Muéstrale estas 3 fotos de su época en el Jirón de la Unión.','Pregúntale: ¿Te acuerdas de esta calle? ¿Qué tiendas había?','Ponle la canción de Los Panchos que su hermana marcó como favorita.','Observa si la reconoce, sin presionarla a responder.'].map((step, i) => <li key={step} className="flex gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">{i+1}</span><p className="pt-1 text-sm leading-6 text-foreground">{step}</p></li>)}</ol><div className="flex gap-3 border-t pt-4"><Button variant="outline" onClick={() => setPaused(!paused)} className="flex-1">{paused ? <Play data-icon="inline-start" /> : <Pause data-icon="inline-start" />} {paused ? "Continuar" : "Pausar"}</Button><Button onClick={() => setStarted(false)} variant="secondary" className="flex-1"><Square data-icon="inline-start" /> Terminar sesión</Button></div></>}
  </CardContent></Card>
}

