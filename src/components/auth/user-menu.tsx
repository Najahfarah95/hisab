"use client"

import { useSession } from "next-auth/react"
import { SignInButton, SignOutButton } from "./sign-in-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function UserMenu() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <Button variant="ghost" size="sm" disabled>
        Loading...
      </Button>
    )
  }

  if (session) {
    return (
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            {session.user?.image ? (
              <img 
                src={session.user.image} 
                alt={session.user.name || "User"} 
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <span className="text-primary font-medium text-sm">
                {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-foreground">
            {session.user?.name || session.user?.email}
          </span>
        </div>
        <SignOutButton size="sm" />
      </div>
    )
  }

  return <SignInButton size="sm" />
}
