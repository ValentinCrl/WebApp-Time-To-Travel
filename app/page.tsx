import { HeroSection } from "@/components/hero-section"
import { DestinationCards } from "@/components/destination-cards"
import { ExperiencesSection } from "@/components/experiences-section"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DestinationCards />
      <ExperiencesSection />
      <FooterSection />
      <ChatbotWidget />
    </main>
  )
}
