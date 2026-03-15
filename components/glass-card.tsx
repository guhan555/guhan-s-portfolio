import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card backdrop-blur-md p-6",
        hover && "transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,122,24,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
