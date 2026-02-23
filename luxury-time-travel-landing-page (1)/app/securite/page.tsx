import { Clock, Shield, AlertTriangle, Users, Zap, Heart, Radio, Lock } from "lucide-react"
import Link from "next/link"
import { FooterSection } from "@/components/footer-section"

const protocols = [
  {
    icon: Shield,
    title: "Bouclier Temporel",
    description: "Chaque voyageur est équipé d'un champ de protection quantique individuel qui le rend invisible aux habitants de l'époque visitée. Cette technologie brevetée garantit une non-interférence totale avec le cours de l'histoire."
  },
  {
    icon: Lock,
    title: "Paradoxe Zéro",
    description: "Notre système de verrouillage ontologique empêche toute action susceptible de créer un paradoxe temporel. Si un voyageur tente involontairement de modifier le passé, il est instantanément redirigé vers une ligne temporelle parallèle sécurisée."
  },
  {
    icon: Radio,
    title: "Balise d'Extraction",
    description: "Chaque voyageur porte une balise à intrication quantique permettant une extraction immédiate en cas d'urgence. Temps de réponse : 0,003 secondes, quelle que soit l'époque ou la localisation."
  },
  {
    icon: Heart,
    title: "Surveillance Biométrique",
    description: "Vos constantes vitales sont surveillées en temps réel par notre équipe médicale. Des nanobots thérapeutiques sont injectés avant chaque voyage pour prévenir les maladies d'époque et optimiser votre adaptation temporelle."
  },
  {
    icon: Users,
    title: "Guides Temporels Certifiés",
    description: "Chaque expédition est encadrée par des Guides Temporels ayant effectué plus de 500 voyages. Ils sont formés à la gestion de crise, aux protocoles historiques et aux premiers secours inter-époques."
  },
  {
    icon: Zap,
    title: "Énergie de Secours",
    description: "Nos capsules temporelles disposent de trois sources d'énergie indépendantes. En cas de défaillance, le système de retour automatique se déclenche, garantissant votre rapatriement au point de départ."
  },
]

const stats = [
  { value: "99,97%", label: "Taux de réussite" },
  { value: "0", label: "Incidents majeurs" },
  { value: "12 847", label: "Voyages effectués" },
  { value: "24/7", label: "Surveillance temporelle" },
]

export default function SecuritePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl tracking-wider text-foreground">CHRONOS</span>
          </Link>
          <Link 
            href="/" 
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Votre sécurité, notre priorité absolue</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
            Protocoles de Sécurité
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Chez Chronos Voyages, nous avons développé les protocoles de sécurité les plus avancés 
            de l'industrie temporelle. Chaque voyage est préparé avec une précision absolue pour 
            garantir une expérience inoubliable et parfaitement sécurisée.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 font-serif text-3xl text-primary md:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocols */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-serif text-3xl text-foreground">
            Nos 6 Piliers de Sécurité
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {protocols.map((protocol, index) => (
              <div 
                key={index}
                className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <protocol.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-foreground">{protocol.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{protocol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl rounded-lg border border-primary/30 bg-primary/5 p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 font-serif text-lg text-foreground">Avertissement Important</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Le voyage temporel reste une expérience intense. Tous les voyageurs doivent suivre 
                une préparation de 48 heures incluant : briefing historique, adaptation psychologique, 
                et calibration de l'équipement personnel. Les personnes souffrant de troubles 
                cardiaques ou de claustrophobie temporelle ne peuvent pas participer aux expéditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
