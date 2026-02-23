import { Clock } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl tracking-wider text-foreground">CHRONOS</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Pionniers du voyage temporel de luxe depuis 2024. Chaque voyage est un chef-d'œuvre, 
              chaque moment un souvenir gravé dans le tissu du temps.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-foreground">Explorer</h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  L'Expérience
                </a>
              </li>
              <li>
                <a href="/securite" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Protocoles de sécurité
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="/consultations" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Consultations privées
                </a>
              </li>
              <li>
                <a href="/presse" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Relations presse
                </a>
              </li>
              <li>
                <a href="/carrieres" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Carrières
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Chronos Voyages. Tous droits temporels réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Politique de confidentialité
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Responsabilité temporelle
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
