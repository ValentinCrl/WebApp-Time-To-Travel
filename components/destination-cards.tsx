"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Users, Euro } from "lucide-react"
import { cn } from "@/lib/utils"

const destinations = [
  {
    id: 1,
    title: "Florence Renaissance",
    year: "1492",
    location: "Florence, Italie",
    image: "/images/ancient-rome.png",
    description: "Parcourez les rues pavées où Léonard de Vinci et Michel-Ange ont créé leurs chefs-d'œuvre. Assistez à la naissance de l'art moderne.",
    duration: "7 jours",
    groupSize: "Max 6 voyageurs",
    highlight: "Commande privée de Laurent de Médicis",
    budget: "2,8M €",
    experienceTab: 1,
  },
  {
    id: 2,
    title: "Paris Belle Époque",
    year: "1889",
    location: "Paris, France",
    image: "/images/roaring-twenties.png",
    description: "Observez la Tour Eiffel s'élever dans le ciel parisien. Flânez le long de la Seine dans l'élégance victorienne.",
    duration: "5 jours",
    groupSize: "Max 8 voyageurs",
    highlight: "Cérémonie d'ouverture de l'Exposition Universelle",
    budget: "2,5M €",
    experienceTab: 0,
  },
  {
    id: 3,
    title: "Expédition Jurassique",
    year: "150M av. J.-C.",
    location: "Terre Préhistorique",
    image: "/images/future-tokyo.png",
    description: "Aventurez-vous dans l'ère des géants. Observez de magnifiques dinosaures dans leur habitat naturel depuis nos pods safari sécurisés.",
    duration: "3 jours",
    groupSize: "Max 4 voyageurs",
    highlight: "Observation d'un T-Rex à l'aube",
    budget: "3,5M €",
    experienceTab: 2,
  },
]

export function DestinationCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="destinations" className="bg-background px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm tracking-widest text-primary uppercase">
            Choisissez votre époque
          </span>
          <h2 className="font-serif text-3xl text-foreground md:text-5xl text-balance">
            Destinations d'Exception
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination, index) => (
            <article
              key={destination.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-500",
                activeCard === index ? "md:scale-105 md:z-10" : "md:hover:scale-102",
              )}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onFocus={() => setActiveCard(index)}
              onBlur={() => setActiveCard(null)}
              tabIndex={0}
              role="button"
              aria-label={`View ${destination.title} journey details`}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={`${destination.title} - ${destination.year}`}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    activeCard === index ? "scale-110" : "scale-100 group-hover:scale-105"
                  )}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute left-4 top-4 rounded-full border border-primary/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
                  
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="mb-3 font-serif text-2xl text-foreground">
                  {destination.title}
                </h3>
                
                <p className={cn(
                  "mb-4 text-sm leading-relaxed text-muted-foreground transition-all duration-300",
                  activeCard === index ? "opacity-100 max-h-20" : "opacity-70 max-h-12 overflow-hidden"
                )}>
                  {destination.description}
                </p>

                {/* Details */}
                <div className={cn(
                  "mb-4 grid grid-cols-2 gap-3 transition-all duration-300",
                  activeCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden md:grid md:opacity-0"
                )}>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-xs">{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-xs">{destination.groupSize}</span>
                  </div>
                </div>

                {/* Budget */}
                <div className={cn(
                  "mb-4 flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 transition-all duration-300",
                  activeCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden md:flex md:opacity-0"
                )}>
                  <Euro className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">À partir de {destination.budget}</span>
                </div>

                {/* Highlight */}
                <div className={cn(
                  "mb-4 rounded-md border border-primary/20 bg-primary/5 p-3 transition-all duration-300",
                  activeCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"
                )}>
                  <span className="text-xs text-primary">Exclusif : {destination.highlight}</span>
                </div>

                {/* CTA */}
                <a 
                  href={`#experiences`}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('selectExperience', { detail: destination.experienceTab }))
                  }}
                  className="flex w-full items-center justify-between rounded-md border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground group/btn"
                >
                  <span>Explorer le voyage</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
