import Link from "next/link"
import { ArrowRight, Linkedin, Mail } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"

const softwareTech = ["Java", "Python", "Node.js", "TypeScript"]
const roboticsTech = ["ROS2", "PyBullet", "Computer Vision", "Reinforcement Learning"]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Guhan S
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Engineer building scalable software systems and exploring intelligent machines.
          </p>
        </section>

        {/* Portfolio Cards */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="flex flex-col">
              <h2 className="text-xl font-semibold text-foreground">Build Software Systems</h2>
              <p className="mt-2 flex-1 text-muted-foreground">
                Backend systems, APIs, full-stack applications
              </p>
              <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/software">
                  View Software Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col">
              <h2 className="text-xl font-semibold text-foreground">Explore Intelligent Machines</h2>
              <p className="mt-2 flex-1 text-muted-foreground">
                Robotics, perception, learning systems
              </p>
              <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/robotics">
                  View Robotics Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </GlassCard>
          </div>
        </section>

        {/* Tech Snapshot */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">Tech Snapshot</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Software</h3>
              <div className="flex flex-wrap gap-2">
                {softwareTech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Robotics</h3>
              <div className="flex flex-wrap gap-2">
                {roboticsTech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <GlassCard className="text-center" hover={false}>
            <p className="text-muted-foreground text-pretty">
              Thanks for sticking till here! If you're on the lookout for a software engineer who thrives on building scalable systems and exploring intelligent machines, let's connect.
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
