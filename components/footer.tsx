import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/f9231d56/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:guhan079@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">Guhan S</p>
      </div>
    </footer>
  )
}
