"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ value, className, ...props }, ref) => {
  const [progress, setProgress] = React.useState(value || 0)

  React.useEffect(() => {
    setProgress(value || 0)
  }, [value])

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200"
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-blue-600 transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})

Progress.displayName = "Progress"

export { Progress }