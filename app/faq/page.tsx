"use client"

import { Clock, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FooterSection } from "@/components/footer-section"
import { cn } from "@/lib/utils"

const faqs = [
  {
    category: "Général",
    questions: [
      {
        question: "Le voyage temporel est-il réellement possible ?",
        answer: "Oui. Depuis la percée scientifique de 2019 avec la découverte des tunnels de Krasnikov stabilisés, le voyage temporel est devenu une réalité. Chronos Voyages a été la première entreprise à obtenir la licence d'exploitation commerciale délivrée par l'Agence Internationale de Régulation Temporelle (AIRT)."
      },
      {
        question: "Puis-je modifier le passé lors de mon voyage ?",
        answer: "Non, et c'est impossible par conception. Notre technologie de Bouclier Temporel vous place dans un état d'observateur pur. Vous pouvez voir, entendre et sentir l'époque visitée, mais toute interaction physique est automatiquement neutralisée par le champ quantique."
      },
      {
        question: "Combien de temps dure réellement un voyage ?",
        answer: "Grâce à la compression temporelle, un voyage de 7 jours dans le passé ne représente que 7 heures dans le temps présent. Vous revenez donc quelques heures seulement après votre départ, avec des souvenirs complets d'une semaine d'aventure."
      },
    ]
  },
  {
    category: "Préparation",
    questions: [
      {
        question: "Quelle préparation est nécessaire avant un voyage ?",
        answer: "Chaque voyageur suit un programme de 48 heures comprenant : examen médical complet, injection de nanobots adaptatifs, briefing historique immersif, essayage de la garde-robe d'époque, et simulation en réalité augmentée de la destination."
      },
      {
        question: "Dois-je apprendre la langue de l'époque ?",
        answer: "Non. Votre implant neural temporaire inclut un traducteur universel qui vous permet de comprendre et de vous faire comprendre dans n'importe quelle langue, y compris les dialectes disparus. La communication reste fluide et naturelle."
      },
      {
        question: "Que dois-je emporter ?",
        answer: "Rien. Tout l'équipement nécessaire est fourni : vêtements d'époque sur mesure, accessoires authentiques, et kit de survie miniaturisé intégré à vos effets personnels. Nous vous demandons uniquement de laisser tout appareil électronique moderne."
      },
    ]
  },
  {
    category: "Sécurité",
    questions: [
      {
        question: "Que se passe-t-il en cas d'urgence médicale ?",
        answer: "Vos nanobots surveillent vos constantes vitales en permanence. En cas d'anomalie, l'extraction automatique se déclenche en 0,003 secondes. Notre équipe médicale vous attend au point de retour avec tout l'équipement nécessaire."
      },
      {
        question: "Puis-je tomber malade dans le passé ?",
        answer: "Non. Avant chaque voyage, vous recevez un cocktail d'anticorps universels qui vous immunise contre toutes les maladies de l'époque visitée. Vous êtes également porteur de nano-filtres respiratoires pour les environnements pollués."
      },
      {
        question: "Et si je me perds ou me sépare du groupe ?",
        answer: "Votre balise quantique permet à nos équipes de vous localiser instantanément, quelle que soit l'époque ou le lieu. Un simple geste active l'extraction d'urgence. De plus, votre Guide Temporel reçoit une alerte si vous vous éloignez de plus de 100 mètres."
      },
    ]
  },
  {
    category: "Tarifs et Réservation",
    questions: [
      {
        question: "Pourquoi les tarifs sont-ils si élevés ?",
        answer: "Le voyage temporel nécessite une quantité d'énergie équivalente à celle d'une petite ville pendant un an. À cela s'ajoutent les assurances temporelles, l'équipement de pointe, les Guides certifiés, et la logistique inter-époques. Chaque voyage est unique et artisanal."
      },
      {
        question: "Proposez-vous des facilités de paiement ?",
        answer: "Oui. Nous offrons un échelonnement sur 12 à 36 mois sans frais, ainsi qu'un programme de fidélité offrant 15% de réduction dès votre deuxième voyage. Des partenariats avec certaines banques privées permettent également des conditions préférentielles."
      },
      {
        question: "Quelle est la politique d'annulation ?",
        answer: "Annulation gratuite jusqu'à 30 jours avant le départ. Entre 30 et 7 jours, 50% du montant est retenu. Moins de 7 jours, le voyage est non remboursable mais reportable une fois sans frais. L'assurance temporelle couvre les cas de force majeure."
      },
    ]
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
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
          <h1 className="mb-6 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
            Questions Fréquentes
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Tout ce que vous devez savoir sur le voyage temporel avec Chronos Voyages. 
            Si vous ne trouvez pas la réponse à votre question, notre Concierge Temporel 
            est disponible 24h/24.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="mb-6 font-serif text-2xl text-primary">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${catIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)
                  
                  return (
                    <div 
                      key={faqIndex}
                      className="rounded-lg border border-border bg-card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary/50"
                      >
                        <span className="pr-4 font-medium text-foreground">{faq.question}</span>
                        <ChevronDown className={cn(
                          "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                          isOpen && "rotate-180"
                        )} />
                      </button>
                      <div className={cn(
                        "grid transition-all",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}>
                        <div className="overflow-hidden">
                          <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center">
          <h3 className="mb-4 font-serif text-2xl text-foreground">Vous avez d'autres questions ?</h3>
          <p className="mb-6 text-muted-foreground">
            Notre équipe de Spécialistes Temporels est à votre disposition pour répondre 
            à toutes vos interrogations.
          </p>
          <Link 
            href="/consultations"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Demander une consultation
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
