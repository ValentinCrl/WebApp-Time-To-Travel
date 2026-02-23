import { Clock, Users, Award, Globe, Sparkles, ArrowRight, Quote, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "À propos | Chronos Voyages",
  description: "Découvrez l'histoire de Chronos Voyages, pionniers du voyage temporel de luxe depuis 2024.",
}

const milestones = [
  {
    year: "2024",
    title: "La Fondation",
    description: "Le Dr. Alexandre Dumont et son équipe de physiciens quantiques réalisent le premier voyage temporel contrôlé dans les laboratoires secrets de Genève."
  },
  {
    year: "2024",
    title: "Premier Voyageur",
    description: "Marie-Claire Fontaine devient la première civile à voyager dans le temps, passant 3 heures dans le Paris de 1889 lors de l'inauguration de la Tour Eiffel."
  },
  {
    year: "2025",
    title: "Certification Internationale",
    description: "Chronos Voyages obtient la première licence mondiale de voyage temporel commercial, délivrée par le Consortium Temporel International."
  },
  {
    year: "2026",
    title: "Expansion Globale",
    description: "Ouverture de nos bureaux à Paris, New York, Tokyo et Dubaï. Lancement de nouvelles destinations : Florence Renaissance et Expédition Jurassique."
  },
]

const values = [
  {
    icon: Shield,
    title: "Sécurité Absolue",
    description: "Chaque voyageur est protégé par notre technologie de bouclier temporel brevetée. Votre sécurité est notre obsession."
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Nous ne faisons aucun compromis sur la qualité. Chaque détail, du costume d'époque au guide historien, est pensé pour la perfection."
  },
  {
    icon: Heart,
    title: "Passion de l'Histoire",
    description: "Notre équipe est composée de passionnés qui croient que comprendre le passé enrichit notre présent."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la science temporelle pour vous offrir des expériences toujours plus immersives."
  },
]

const team = [
  {
    name: "Dr. Alexandre Dumont",
    role: "Fondateur & Directeur Scientifique",
    description: "Ancien chercheur au CERN, pionnier de la manipulation des flux temporels. Prix Nobel de Physique 2025."
  },
  {
    name: "Isabelle Moreau",
    role: "Directrice des Expériences",
    description: "Historienne de formation, elle conçoit chaque voyage comme une œuvre d'art immersive unique."
  },
  {
    name: "Dr. Kenji Nakamura",
    role: "Directeur de la Sécurité Temporelle",
    description: "Expert en paradoxes quantiques, il supervise tous les protocoles de sécurité de nos voyages."
  },
  {
    name: "Sofia Andersson",
    role: "Directrice de la Clientèle",
    description: "Spécialiste du luxe et de l'hospitalité, elle garantit une expérience client irréprochable."
  },
]

const stats = [
  { value: "847", label: "Voyageurs satisfaits" },
  { value: "99,97%", label: "Taux de réussite" },
  { value: "15", label: "Époques accessibles" },
  { value: "0", label: "Incident majeur" },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl tracking-wider text-foreground">CHRONOS</span>
        </Link>
        <Link href="/">
          <Button variant="outline" className="border-primary/30 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground">
            Retour à l'accueil
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm tracking-widest text-primary uppercase">
            Notre Histoire
          </span>
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-6xl text-balance">
            Pionniers du voyage 
            <span className="text-primary"> à travers le temps</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Chronos Voyages est né d'un rêve impossible : permettre à l'humanité de toucher son passé, 
            de marcher dans les pas de ses ancêtres, de vivre l'Histoire plutôt que de simplement la lire.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto mb-6 h-12 w-12 text-primary/50" />
          <blockquote className="mb-6 font-serif text-2xl italic text-foreground md:text-3xl leading-relaxed">
            "Le temps n'est pas une prison. C'est un océan infini dans lequel nous avons appris à naviguer."
          </blockquote>
          <cite className="text-muted-foreground">
            — Dr. Alexandre Dumont, Fondateur de Chronos Voyages
          </cite>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 font-serif text-4xl text-primary md:text-5xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-card">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm tracking-widest text-primary uppercase">
              Notre Parcours
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Les grandes étapes
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                {/* Timeline Dot */}
                <div className={`absolute left-2 top-1 h-5 w-5 rounded-full border-4 border-primary bg-background md:left-auto ${index % 2 === 0 ? 'md:-right-2.5' : 'md:-left-2.5'}`} />
                
                <div className="rounded-lg border border-border bg-background p-6">
                  <span className="mb-2 inline-block text-sm font-medium text-primary">{milestone.year}</span>
                  <h3 className="mb-2 font-serif text-xl text-foreground">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm tracking-widest text-primary uppercase">
              Ce qui nous guide
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Nos valeurs fondamentales
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm tracking-widest text-primary uppercase">
              L'équipe dirigeante
            </span>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Les visionnaires derrière Chronos
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-1 font-serif text-lg text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <Globe className="mx-auto mb-6 h-16 w-16 text-primary" />
          <h2 className="mb-6 font-serif text-3xl text-foreground md:text-4xl">
            Notre mission
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
            Nous croyons que le voyage temporel n'est pas seulement une prouesse technologique, 
            mais une révolution dans notre rapport à l'Histoire. Notre mission est de rendre 
            accessible cette expérience transformatrice aux voyageurs les plus exigeants, 
            tout en préservant l'intégrité du continuum temporel et en respectant les civilisations 
            que nous visitons.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/consultations">
              <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                Planifier une consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/carrieres">
              <Button variant="outline" size="lg" className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10">
                Rejoindre l'équipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-card border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h3 className="font-serif text-xl text-foreground">Reconnaissances</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">Prix Nobel de Physique 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">Innovation Luxe 2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">Excellence Française 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Chronos Voyages. Tous droits temporels réservés.
          </p>
          <Link href="/" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </div>
  )
}
