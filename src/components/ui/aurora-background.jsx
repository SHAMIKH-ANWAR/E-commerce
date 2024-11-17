

import { cn } from "@/lib/utils"
import React from "react"

export const AuroraBackground = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-950 animate-aurora">
      <div
        className={cn(
          "absolute inset-0 opacity-50",
          className
        )}
        {...props}
      >
        <div
          className={cn(`
            absolute inset-0
            [--aurora:repeating-linear-gradient(100deg,#2ec4b6_10%,#cbf3f0_15%,#cbf3f0_20%,#cbf3f0_25%,#cbf3f0_30%)]
            [background-image:var(--aurora)]
            [background-size:300%_300%]
            animate-aurora
            blur-[100px]
          `)}
        ></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}