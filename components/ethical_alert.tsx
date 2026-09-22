import { AlertTriangle, ArrowRight, HeartHandshake } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
export function EthicalAlert() { return <Alert className="border-secondary/30 bg-secondary/10 text-foreground"><AlertTriangle className="text-secondary" /><div className="flex-1"><AlertTitle className="text-base text-foreground">Acompañar también es saber pausar</AlertTitle><AlertDescription className="mt-1 text-foreground/75">Si las últimas sesiones no han ido bien, te recomendamos pausar y consultar con un profesional.</AlertDescription></div><Button variant="outline" size="sm" className="border-secondary/40 bg-transparent text-secondary hover:bg-secondary/10">Ver recomendaciones <ArrowRight data-icon="inline-end" /></Button></Alert> }
export function SafetyNote() { return <div className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-primary"><HeartHandshake className="size-5 shrink-0" /><p><strong>Recuerda:</strong> Ayni Digital no reemplaza una consulta médica, psicológica ni geriátrica.</p></div> }

