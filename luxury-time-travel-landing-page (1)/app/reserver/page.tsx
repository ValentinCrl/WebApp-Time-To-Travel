"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, ArrowLeft, ChevronLeft, ChevronRight, Check, MapPin, Calendar, Users, Euro } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    title: "Florence Renaissance",
    year: "1492",
    location: "Florence, Italie",
    duration: 7,
    budget: "2,8M €",
    image: "/images/ancient-rome.png",
  },
  {
    id: 2,
    title: "Paris Belle Époque",
    year: "1889",
    location: "Paris, France",
    duration: 5,
    budget: "2,5M €",
    image: "/images/roaring-twenties.png",
  },
  {
    id: 3,
    title: "Expédition Jurassique",
    year: "150M av. J.-C.",
    location: "Terre Préhistorique",
    duration: 3,
    budget: "3,5M €",
    image: "/images/future-tokyo.png",
  },
]

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
]

export default function ReserverPage() {
  const [step, setStep] = useState(1)
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    voyageurs: 1,
  })

  const destination = destinations.find(d => d.id === selectedDestination)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()
    
    const days: (Date | null)[] = []
    
    // Jours vides avant le premier jour du mois
    for (let i = 0; i < (startingDay === 0 ? 6 : startingDay - 1); i++) {
      days.push(null)
    }
    
    // Jours du mois
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    
    return days
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    // Disponible seulement pour les dates futures et pas les week-ends
    const dayOfWeek = date.getDay()
    return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const getEndDate = (startDate: Date, duration: number) => {
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + duration - 1)
    return endDate
  }

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return selectedDestination !== null
      case 2: return selectedDate !== null && selectedTime !== null
      case 3: return formData.nom && formData.email && formData.telephone
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl tracking-wider text-foreground">CHRONOS</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">
            Réservez votre voyage temporel
          </h1>
          <p className="text-muted-foreground">
            Sélectionnez votre destination et choisissez votre créneau de départ
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 flex items-center justify-center gap-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-all",
                step > s 
                  ? "border-primary bg-primary text-primary-foreground" 
                  : step === s 
                    ? "border-primary text-primary" 
                    : "border-border text-muted-foreground"
              )}>
                {step > s ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div className={cn(
                  "hidden h-0.5 w-12 md:block",
                  step > s ? "bg-primary" : "bg-border"
                )} />
              )}
            </div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="mb-12 hidden justify-center gap-16 md:flex">
          <span className={cn("text-sm", step >= 1 ? "text-foreground" : "text-muted-foreground")}>Destination</span>
          <span className={cn("text-sm", step >= 2 ? "text-foreground" : "text-muted-foreground")}>Date & Heure</span>
          <span className={cn("text-sm", step >= 3 ? "text-foreground" : "text-muted-foreground")}>Informations</span>
          <span className={cn("text-sm", step >= 4 ? "text-foreground" : "text-muted-foreground")}>Confirmation</span>
        </div>

        {/* Step 1: Destination Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-center text-lg font-medium text-foreground">
              Choisissez votre destination temporelle
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {destinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest.id)}
                  className={cn(
                    "group relative overflow-hidden rounded-lg border-2 p-4 text-left transition-all",
                    selectedDestination === dest.id 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="mb-4 aspect-video overflow-hidden rounded-md">
                    <img 
                      src={dest.image || "/placeholder.svg"} 
                      alt={dest.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-1 font-serif text-lg text-foreground">{dest.title}</h3>
                  <p className="mb-3 text-sm text-primary">{dest.year}</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {dest.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      Durée : {dest.duration} jours
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="h-3 w-3" />
                      À partir de {dest.budget}
                    </div>
                  </div>
                  {selectedDestination === dest.id && (
                    <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Calendar */}
        {step === 2 && destination && (
          <div className="space-y-8">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-4">
                <img 
                  src={destination.image || "/placeholder.svg"} 
                  alt={destination.title}
                  className="h-16 w-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="font-serif text-lg text-foreground">{destination.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Durée du séjour : {destination.duration} jours
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calendar */}
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <button 
                    onClick={previousMonth}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="font-medium text-foreground">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button 
                    onClick={nextMonth}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
                  {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(day => (
                    <div key={day} className="py-2">{day}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((day, index) => (
                    <button
                      key={index}
                      disabled={!day || !isDateAvailable(day)}
                      onClick={() => day && isDateAvailable(day) && setSelectedDate(day)}
                      className={cn(
                        "aspect-square rounded-md p-2 text-sm transition-all",
                        !day && "invisible",
                        day && !isDateAvailable(day) && "cursor-not-allowed text-muted-foreground/30",
                        day && isDateAvailable(day) && "hover:bg-primary/10 hover:text-primary",
                        selectedDate && day && selectedDate.toDateString() === day.toDateString() && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      {day?.getDate()}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-primary" />
                    Sélectionné
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-muted-foreground/30" />
                    Indisponible
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-4 font-medium text-foreground">Heure de départ</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "rounded-md border px-4 py-3 text-sm transition-all",
                          selectedTime === time 
                            ? "border-primary bg-primary text-primary-foreground" 
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                    <h3 className="mb-3 font-medium text-foreground">Récapitulatif du séjour</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="text-foreground">Départ :</span> {formatDate(selectedDate)} à {selectedTime}
                      </p>
                      <p>
                        <span className="text-foreground">Retour :</span> {formatDate(getEndDate(selectedDate, destination.duration))}
                      </p>
                      <p>
                        <span className="text-foreground">Durée totale :</span> {destination.duration} jours
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Personal Information */}
        {step === 3 && (
          <div className="mx-auto max-w-lg space-y-6">
            <h2 className="text-center text-lg font-medium text-foreground">
              Vos informations personnelles
            </h2>
            <div className="space-y-4 rounded-lg border border-border bg-card p-6">
              <div>
                <label className="mb-2 block text-sm text-foreground">Nom complet</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-foreground">Adresse e-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-foreground">Téléphone</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-foreground">Nombre de voyageurs</label>
                <select
                  value={formData.voyageurs}
                  onChange={(e) => setFormData({ ...formData, voyageurs: parseInt(e.target.value) })}
                  className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n} voyageur{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && destination && selectedDate && (
          <div className="mx-auto max-w-lg space-y-6 text-center">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="font-serif text-2xl text-foreground">
              Réservation confirmée !
            </h2>
            <p className="text-muted-foreground">
              Votre voyage temporel vers {destination.title} a été enregistré avec succès.
            </p>
            <div className="rounded-lg border border-border bg-card p-6 text-left">
              <h3 className="mb-4 font-medium text-foreground">Détails de votre réservation</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destination</span>
                  <span className="text-foreground">{destination.title} ({destination.year})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date de départ</span>
                  <span className="text-foreground">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Heure</span>
                  <span className="text-foreground">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Durée</span>
                  <span className="text-foreground">{destination.duration} jours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Voyageurs</span>
                  <span className="text-foreground">{formData.voyageurs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nom</span>
                  <span className="text-foreground">{formData.nom}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-medium">
                    <span className="text-foreground">Total estimé</span>
                    <span className="text-primary">{destination.budget}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Un e-mail de confirmation a été envoyé à {formData.email}. 
              Notre équipe vous contactera sous 48h pour finaliser les détails.
            </p>
            <Link href="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="mt-12 flex justify-between">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="border-border bg-transparent text-foreground hover:bg-secondary disabled:opacity-50"
            >
              Précédent
            </Button>
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {step === 3 ? "Confirmer la réservation" : "Continuer"}
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
