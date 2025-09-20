"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

interface SignOutButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children?: React.ReactNode
}

export function SignOutButton({ 
  variant = "outline", 
  size = "default", 
  className,
  children = "Sign Out"
}: SignOutButtonProps) {
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      {children}
    </Button>
  )
}
