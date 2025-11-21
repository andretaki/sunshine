'use client';

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide font-subhead transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sunshine-purple focus-visible:ring-offset-background hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-sunshine-orange",
        destructive:
          "bg-destructive text-white hover:bg-sunshine-purple focus-visible:ring-destructive",
        outline:
          "border-2 bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-sunshine-purple",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline rounded-none hover:scale-100 active:scale-100",
        glow: "bg-sunshine-orange text-sunshine-white ring-4 ring-sunshine-yellow/40 hover:ring-sunshine-yellow/60 hover:bg-sunshine-orange",
        "glow-purple": "bg-sunshine-purple text-sunshine-white ring-4 ring-sunshine-yellow/30 hover:ring-sunshine-yellow/50 hover:bg-sunshine-orange",
        "glow-yellow": "bg-sunshine-yellow text-sunshine-brown ring-4 ring-sunshine-purple/30 hover:ring-sunshine-purple/50 hover:bg-sunshine-blue hover:text-sunshine-brown",
      },
      size: {
        default: "h-11 px-6 has-[>svg]:px-5",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-12 px-7 has-[>svg]:px-6 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
