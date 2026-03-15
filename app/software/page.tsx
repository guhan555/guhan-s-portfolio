import { Linkedin, Mail } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"

const experience = [
  {
    title: "Zoho Integration Framework",
    description: "Designed an integration framework enabling third-party applications to embed Zoho Books as a white-labeled accounting service. Enabled external partners to integrate accounting workflows seamlessly.",
  },
  {
    title: "Clinical Data Platform",
    description: "Backend system for clinical data capture with secure patient record management, AI-assisted health scoring pipelines, and Twilio-based patient feedback integration.",
  },
  {
    title: "Social Media Startup Backend",
    description: "Built scalable Node.js backend with messaging system, photo sharing infrastructure, real-time chat architecture, and media processing pipelines.",
  },
]

const techStack = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "C++", "Rust"],
  Frameworks: ["Node.js", "React", "Express", "Hono"],
  Tools: ["Docker", "GitHub Actions", "Linux", "CI/CD"],
}

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Software Engineering
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Building scalable backend systems and production-ready applications.
          </p>
        </section>

        {/* About */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <GlassCard hover={false}>
            <h2 className="text-xl font-semibold text-foreground">About</h2>
            <p className="mt-4 text-muted-foreground">
              4+ years of professional experience building backend systems, cross-team collaboration, and production systems development. Passionate about creating scalable, maintainable software that solves real problems.
            </p>
          </GlassCard>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Professional Experience</h2>
          <div className="grid gap-6">
            {experience.map((item) => (
              <GlassCard key={item.title}>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Tech Stack</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <GlassCard className="text-center" hover={false}>
            <p className="text-muted-foreground text-pretty">
              Thanks for sticking till here! If you're on the lookout for a software engineer who thrives on building scalable systems, let's connect.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                <a href="https://www.linkedin.com/in/f9231d56/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                <a href="mailto:guhan079@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </GlassCard>
        </section>
      </main>
      <Footer />
    </div>
  )
}
