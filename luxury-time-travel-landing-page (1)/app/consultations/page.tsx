"use client"

import React from "react"

import { Clock, Calendar, Video, MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const consultationTypes = [
  {
    id: "discovery",
    title: "Découverte",
    duration: "30 min",
    price: "Gratuit",
    description: "Première prise de contact pour découvrir nos services et répondre à vos questions.",
    features: ["Présentation des destinations", "Réponses à vos questions", "Évaluation de vos souhaits"]
  },
  {
    id: "planning",
    title: "Planification",
    duration: "1h30",
    price: "500 €",
    description: "Session approfondie pour concevoir votre voyage temporel sur mesure.",
    features: ["Analyse détaillée de vos attentes", "Recommandations personnalisées", "Devis sur mesure", "Présentation VR de la destination"]
  },
  {
    id: "vip",
    title: "VIP Prestige",
    duration: "3h",
    price: "2 000 €",
    description: "Expérience immersive complète avec simulation de voyage et dégustation d'époque.",
    features: ["Simulation en réalité virtuelle", "Dégustation culinaire d'époque", "Essayage garde-robe", "Plan de voyage complet", "Accompagnement dédié"]
  },
]

export default function ConsultationsPage() {
  const [selectedType, setSelectedType] = useState("discovery")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl text-balance">
            Consultations Privées
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Rencontrez nos Spécialistes Temporels pour une expérience personnalisée. 
            Chaque consultation est une porte ouverte vers votre prochaine aventure à travers le temps.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center font-serif text-2xl text-foreground">
            Choisissez votre type de consultation
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {consultationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "rounded-lg border p-6 text-left transition-all",
                  selectedType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-serif text-xl text-foreground">{type.title}</span>
                  <span className="text-lg font-medium text-primary">{type.price}</span>
                </div>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{type.duration}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="border-y border-border bg-card px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Visioconférence</h3>
              <p className="text-sm text-muted-foreground">Depuis chez vous</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">En personne</h3>
              <p className="text-sm text-muted-foreground">Paris, Londres, New York</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Téléphone</h3>
              <p className="text-sm text-muted-foreground">+33 1 88 32 00 00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="mb-2 font-serif text-2xl text-foreground">Demande envoyée</h2>
              <p className="text-muted-foreground">
                Merci pour votre intérêt. Un Spécialiste Temporel vous contactera 
                dans les 24 heures pour confirmer votre rendez-vous.
              </p>
            </div>
          ) : (
            <>
              <h2 className="mb-8 text-center font-serif text-2xl text-foreground">
                Réserver votre consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-foreground">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-foreground">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-foreground">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-foreground">Date souhaitée</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-foreground">Message (optionnel)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Parlez-nous de vos envies de voyage temporel..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Envoyer ma demande
                </Button>
              </form>
            </>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
