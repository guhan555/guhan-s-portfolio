import { Linkedin, Mail } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Imitation Learning Pick-and-Place",
    description: "Dynamic Movement Primitives framework built in PyBullet for robotic manipulation tasks. Designed to be hardware-agnostic and compatible with ROS.",
  },
  {
    title: "ROS2 Integration for Spot Robot",
    description: "Developed ROS2 interface for remote control including locomotion and arm manipulation capabilities.",
  },
  {
    title: "Autonomous Robot Tracking",
    description: "Sensor fusion system combining IMU, wheel odometry, and camera data using Gauss-Newton optimization and particle filtering.",
  },
  {
    title: "GAN Data Augmentation",
    description: "Generated synthetic underwater trash detection datasets using GANs to improve training data quality and model performance.",
  },
]

const roboticsStack = ["ROS1", "ROS2", "Gazebo", "PyBullet", "OpenCV", "PyTorch", "SLAM"]

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Robotics & Intelligent Machines
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Exploring autonomous systems, robot perception and learning.
          </p>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Research Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <GlassCard key={project.title}>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Robotics Stack */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Robotics Stack</h2>
          <div className="flex flex-wrap gap-2">
            {roboticsStack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </section>

        {/* Learning Journey */}
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <GlassCard hover={false}>
            <h2 className="text-xl font-semibold text-foreground">Learning Journey</h2>
            <p className="mt-4 text-muted-foreground">
              Driven by curiosity about how machines perceive and interact with the world. My exploration spans autonomous systems, robot perception, and reinforcement learning. Each project represents a step toward understanding how we can build intelligent systems that operate effectively in complex, real-world environments.
            </p>
          </GlassCard>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <GlassCard className="text-center" hover={false}>
            <p className="text-muted-foreground text-pretty">
              Interested in robotics research or autonomous systems? Let's connect and explore possibilities together.
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
