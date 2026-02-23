"use client"

import { useState, useEffect } from "react"
import { MapPin, Wine, Palette, Footprints, Ship, Camera, Binary as Binoculars, Trees, Mountain } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: 1,
    destination: "Belle Époque Paris",
    year: "1889",
    activities: [
      {
        icon: Footprints,
        title: "Promenade au bord de la Seine",
        description: "Flânez le long des quais au coucher du soleil, admirez les péniches et les ponts illuminés par les réverbères à gaz.",
      },
      {
        icon: Wine,
        title: "Soirée au Café de Flore",
        description: "Partagez un verre avec les artistes et intellectuels de l'époque dans les cafés légendaires de Saint-Germain.",
      },
      {
        icon: Camera,
        title: "Visite de la Tour Eiffel en construction",
        description: "Assistez à l'édification de la Dame de Fer et rencontrez Gustave Eiffel lui-même.",
      },
      {
        icon: Palette,
        title: "Atelier avec les Impressionnistes",
        description: "Peignez aux côtés de Monet et Renoir dans leurs ateliers de Montmartre.",
      },
    ],
  },
  {
    id: 2,
    destination: "Renaissance Florence",
    year: "1492",
    activities: [
      {
        icon: Palette,
        title: "Visite de l'atelier de Léonard",
        description: "Observez le maître au travail sur ses inventions et chefs-d'œuvre dans son bottega florentine.",
      },
      {
        icon: MapPin,
        title: "Audience chez les Médicis",
        description: "Assistez à une réception au Palazzo Medici et côtoyez la famille la plus puissante d'Italie.",
      },
      {
        icon: Footprints,
        title: "Marché de la Piazza della Signoria",
        description: "Déambulez parmi les étals de soie, d'épices et d'œuvres d'art au cœur de la ville.",
      },
      {
        icon: Wine,
        title: "Banquet Renaissance",
        description: "Savourez un festin d'époque avec des mets raffinés et des vins toscans d'exception.",
      },
    ],
  },
  {
    id: 3,
    destination: "Expédition Jurassique",
    year: "150M av. J.-C.",
    activities: [
      {
        icon: Binoculars,
        title: "Safari en pod sécurisé",
        description: "Observez les géants du Jurassique depuis nos capsules d'observation ultra-sécurisées et invisibles.",
      },
      {
        icon: Trees,
        title: "Exploration de la jungle primordiale",
        description: "Traversez des forêts de fougères géantes et découvrez une flore disparue depuis des millions d'années.",
      },
      {
        icon: Mountain,
        title: "Observation au lever du soleil",
        description: "Assistez au réveil des dinosaures dans leur habitat naturel, un spectacle à couper le souffle.",
      },
      {
        icon: Ship,
        title: "Croisière sur les lacs préhistoriques",
        description: "Naviguez sur des eaux cristallines peuplées de créatures marines extraordinaires.",
      },
    ],
  },
]

export function ExperiencesSection() {
  const [activeDestination, setActiveDestination] = useState(0)

  useEffect(() => {
    const handleSelectExperience = (event: CustomEvent<number>) => {
      setActiveDestination(event.detail)
    }
    
    window.addEventListener('selectExperience', handleSelectExperience as EventListener)
    return () => {
      window.removeEventListener('selectExperience', handleSelectExperience as EventListener)
    }
  }, [])

  return (
    <section id="experiences" className="bg-secondary/30 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">Vivez l'extraordinaire</p>
          <h2 className="mb-6 font-serif text-3xl text-foreground md:text-5xl text-balance">
            Expériences Uniques
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Chaque destination offre des moments inoubliables, soigneusement orchestrés pour vous faire vivre l'histoire de l'intérieur.
          </p>
        </div>

        {/* Destination Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveDestination(index)}
              className={cn(
                "rounded-full border px-6 py-3 text-sm tracking-wide transition-all",
                activeDestination === index
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {exp.destination}
              
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {experiences[activeDestination].activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-serif text-lg text-foreground">{activity.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
