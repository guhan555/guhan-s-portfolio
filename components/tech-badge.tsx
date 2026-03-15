import { cn } from "@/lib/utils"

interface TechBadgeProps {
  children: React.ReactNode
  className?: string
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-secondary px-3 py-1 text-sm text-foreground",
        className
      )}
    >
      {children}
    </span>
  )
}
