"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Clock, Sparkles } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToDestinations = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            transform: `scale(${1 + scrollY * 0.0005})`,
            filter: `brightness(${0.4 - scrollY * 0.0002})`,
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl tracking-wider text-foreground">CHRONOS</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#destinations" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
            Destinations
          </a>
          <a href="#experiences" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
            Expériences
          </a>
          <a href="/a-propos" className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
            À propos
          </a>
        </div>
        <a href="/reserver">
          <Button variant="outline" className="border-primary/30 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground">
            Réserver
          </Button>
        </a>
      </nav>

      {/* Hero Content */}
      <div
        className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center"
        style={{ opacity: Math.max(0, 1 - scrollY * 0.002) }}
      >
        <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm tracking-wide text-primary">Expériences de voyage temporel exclusives</span>
        </div>
        
        <h1 className="mb-6 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Voyagez à travers
          <br />
          <span className="text-primary">l'Histoire elle-même</span>
        </h1>
        
        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
          Vivez les moments les plus extraordinaires de l'histoire humaine. 
          Des voyages sur mesure pour le voyageur exigeant en quête d'impossible.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="/reserver">
            <Button size="lg" className="bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              Commencer votre voyage
            </Button>
          </a>
          <Button variant="outline" size="lg" className="border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10">
            Voir les destinations
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDestinations}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to destinations"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
