"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

interface SignInButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
}

export function SignInButton({ 
  variant = "default", 
  size = "default", 
  className,
  children = "Sign In"
}: SignInButtonProps) {
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={() => signIn()}
    >
      {children}
    </Button>
  )
}
