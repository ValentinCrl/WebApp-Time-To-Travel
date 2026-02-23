import { Clock, Download, ExternalLink, Mail, Calendar } from "lucide-react"
import Link from "next/link"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"

const pressReleases = [
  {
    date: "15 janvier 2026",
    title: "Chronos Voyages lance sa première expédition vers l'ère Jurassique",
    excerpt: "Une avancée technologique majeure permet désormais de voyager jusqu'à 150 millions d'années dans le passé en toute sécurité.",
  },
  {
    date: "3 décembre 2025",
    title: "Partenariat exclusif avec le Musée du Louvre",
    excerpt: "Les voyageurs Chronos pourront bientôt assister à l'arrivée de la Joconde en France en 1516.",
  },
  {
    date: "18 octobre 2025",
    title: "10 000e voyageur temporel : un cap historique",
    excerpt: "Chronos Voyages célèbre son 10 000e client avec un taux de satisfaction de 99,8%.",
  },
  {
    date: "22 août 2025",
    title: "Certification ISO-TEMP 9001 obtenue",
    excerpt: "Première entreprise de voyage temporel à obtenir la certification internationale de sécurité temporelle.",
  },
]

const mediaAppearances = [
  { outlet: "Le Monde", title: "Le tourisme temporel, nouvelle frontière du luxe", date: "Janvier 2026" },
  { outlet: "Vogue France", title: "Mode d'époque : les créations Chronos", date: "Décembre 2025" },
  { outlet: "Les Échos", title: "Chronos Voyages valorisée à 12 milliards d'euros", date: "Novembre 2025" },
  { outlet: "France 2", title: "Envoyé Spécial : Voyage dans le temps, la réalité", date: "Octobre 2025" },
]

const stats = [
  { value: "47", label: "Pays de couverture médiatique" },
  { value: "2 400+", label: "Articles de presse" },
  { value: "15M", label: "Vues documentaires" },
]

export default function PressePage() {
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
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            Relations Presse
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Bienvenue dans l'espace dédié aux journalistes et médias. 
            Retrouvez nos communiqués, ressources visuelles et contacts presse.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 font-serif text-3xl text-primary md:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Press Contact */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 rounded-lg border border-primary/30 bg-primary/5 p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="mb-2 font-serif text-2xl text-foreground">Contact Presse</h2>
                <p className="text-muted-foreground">
                  Pour toute demande d'interview, reportage ou information complémentaire.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:presse@chronos-voyages.com"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  presse@chronos-voyages.com
                </a>
                <span className="text-sm text-muted-foreground">Réponse sous 24h garantie</span>
              </div>
            </div>
          </div>

          {/* Press Kit */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-2xl text-foreground">Kit Presse</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-medium text-foreground">Logos & Visuels</h3>
                <p className="mb-4 text-sm text-muted-foreground">Logos HD, photos officielles, vidéos promotionnelles</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Télécharger (45 MB)
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-medium text-foreground">Dossier de Presse</h3>
                <p className="mb-4 text-sm text-muted-foreground">Histoire, chiffres clés, biographies dirigeants</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Télécharger (12 MB)
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 font-medium text-foreground">Fact Sheet</h3>
                <p className="mb-4 text-sm text-muted-foreground">Données clés en un coup d'œil</p>
                <Button variant="outline" className="w-full gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Télécharger (2 MB)
                </Button>
              </div>
            </div>
          </div>

          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="mb-6 font-serif text-2xl text-foreground">Communiqués de Presse</h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <div 
                  key={index}
                  className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center"
                >
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {release.date}
                    </div>
                    <h3 className="mb-1 font-medium text-foreground">{release.title}</h3>
                    <p className="text-sm text-muted-foreground">{release.excerpt}</p>
                  </div>
                  <Button variant="outline" className="shrink-0 gap-2 bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                    Lire
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Media Appearances */}
          <div>
            <h2 className="mb-6 font-serif text-2xl text-foreground">Ils parlent de nous</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mediaAppearances.map((media, index) => (
                <div 
                  key={index}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {media.outlet}
                  </span>
                  <h3 className="mb-2 font-medium text-foreground">{media.title}</h3>
                  <span className="text-sm text-muted-foreground">{media.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
