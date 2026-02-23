import { Clock, MapPin, Briefcase, Users, Sparkles, Heart, GraduationCap, Globe } from "lucide-react"
import Link from "next/link"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"

const jobs = [
  {
    title: "Guide Temporel Senior",
    department: "Opérations",
    location: "Paris / Multi-époques",
    type: "CDI",
    description: "Accompagnez nos voyageurs à travers les âges. Minimum 200 voyages effectués requis.",
  },
  {
    title: "Ingénieur Quantique",
    department: "R&D",
    location: "Genève",
    type: "CDI",
    description: "Rejoignez l'équipe qui repousse les limites du voyage temporel. Doctorat en physique quantique exigé.",
  },
  {
    title: "Historien-Consultant",
    department: "Expérience Client",
    location: "Londres",
    type: "CDI",
    description: "Concevez les briefings historiques et assurez l'authenticité de chaque voyage.",
  },
  {
    title: "Styliste d'Époque",
    department: "Design",
    location: "Milan",
    type: "CDI",
    description: "Créez des garde-robes authentiques pour chaque destination temporelle.",
  },
  {
    title: "Médecin Temporel",
    department: "Santé & Sécurité",
    location: "Paris",
    type: "CDI",
    description: "Supervisez la santé des voyageurs et gérez les protocoles médicaux inter-époques.",
  },
  {
    title: "Concierge Temporel",
    department: "Service Client",
    location: "Paris / Remote",
    type: "CDI / CDD",
    description: "Offrez une expérience client exceptionnelle avant, pendant et après chaque voyage.",
  },
]

const benefits = [
  {
    icon: Globe,
    title: "Voyages offerts",
    description: "2 voyages temporels gratuits par an pour vous et un accompagnant"
  },
  {
    icon: Heart,
    title: "Santé premium",
    description: "Mutuelle complète + nanobots préventifs + suivi médical personnalisé"
  },
  {
    icon: GraduationCap,
    title: "Formation continue",
    description: "Accès illimité à nos programmes de formation inter-époques"
  },
  {
    icon: Users,
    title: "Équipe exceptionnelle",
    description: "Rejoignez 850 pionniers passionnés venus de 45 pays"
  },
]

const values = [
  "L'excellence dans chaque détail",
  "Le respect absolu du temps",
  "L'innovation au service de l'humain",
  "La sécurité sans compromis",
]

export default function CarrieresPage() {
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
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Rejoignez les pionniers du temps</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
            Façonnez l'avenir du voyage temporel
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Chez Chronos Voyages, nous ne recrutons pas des employés, nous accueillons des visionnaires. 
            Des personnes qui rêvent grand et qui veulent écrire l'histoire — littéralement.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-card px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl text-foreground">Nos Valeurs</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-serif text-primary">
                  {index + 1}
                </div>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl text-foreground">Avantages</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-medium text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl text-foreground">Postes Ouverts</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <h3 className="mb-2 font-serif text-xl text-foreground">{job.title}</h3>
                  <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>
                <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                  Postuler
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center">
          <h3 className="mb-4 font-serif text-2xl text-foreground">Candidature spontanée</h3>
          <p className="mb-6 text-muted-foreground">
            Vous ne trouvez pas le poste idéal ? Envoyez-nous votre candidature. 
            Les talents exceptionnels trouvent toujours leur place chez Chronos.
          </p>
          <a 
            href="mailto:carrieres@chronos-voyages.com"
            className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            carrieres@chronos-voyages.com
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
