"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bienvenue chez Chronos Voyages. Je suis votre concierge temporel. Comment puis-je vous aider à planifier votre voyage à travers le temps ?",
    isBot: true,
    timestamp: new Date(),
  },
]

const quickReplies = [
  "Parlez-moi des destinations",
  "Comment fonctionne le voyage temporel ?",
  "Informations sur les tarifs",
  "Protocoles de sécurité",
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes("destination") || lowerMessage.includes("où")) {
      return "Nous proposons trois expériences signatures : Florence Renaissance (1492), Paris Belle Époque (1889) et l'Expédition Jurassique (150M av. J.-C.). Chaque voyage est soigneusement conçu pour un groupe intimiste de voyageurs."
    }
    if (lowerMessage.includes("comment") || lowerMessage.includes("fonctionne")) {
      return "Notre technologie brevetée de déplacement temporel assure un passage sécurisé à travers le flux chronologique. Tous les voyages sont supervisés par des Guides Temporels certifiés, et vous serez briefé en détail avant le départ."
    }
    if (lowerMessage.includes("prix") || lowerMessage.includes("tarif") || lowerMessage.includes("coût")) {
      return "Nos expériences débutent à 2,5M€ par voyageur. Cela inclut tous les frais temporels, une garde-robe d'époque et notre couverture exclusive d'Assurance Temporelle. Souhaitez-vous organiser une consultation privée ?"
    }
    if (lowerMessage.includes("sécurité") || lowerMessage.includes("risque")) {
      return "La sécurité est primordiale. Notre taux de réussite est de 99,97%, et tous les voyageurs reçoivent une orientation temporelle complète. Nous fournissons également des balises d'urgence à intrication quantique pour une extraction immédiate si nécessaire."
    }
    return "C'est une question fascinante. Je vous recommande de parler avec l'un de nos Spécialistes Temporels qui pourra vous guider en détail. Souhaitez-vous que je planifie une consultation ?"
  }

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 flex w-[calc(100vw-48px)] max-w-md flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-all duration-300 md:right-8",
          isOpen ? "h-[500px] opacity-100 scale-100" : "h-0 opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/30 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-sm text-foreground">Concierge Temporel</h3>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                En ligne
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Fermer le chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl px-4 py-3 text-sm",
                    message.isBot
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-xl bg-secondary px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-border p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 rounded-lg border border-border bg-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={!inputValue.trim()}
              aria-label="Envoyer le message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 md:right-8",
          isOpen
            ? "bg-secondary text-secondary-foreground rotate-0"
            : "bg-primary text-primary-foreground hover:scale-110"
        )}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <Sparkles className="absolute -right-1 -top-1 h-3 w-3 animate-pulse" />
          </div>
        )}
      </button>
    </>
  )
}
