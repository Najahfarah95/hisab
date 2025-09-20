"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            TailwindCSS + shadcn/ui Integration
          </h1>
          <p className="text-lg text-muted-foreground">
            Successfully integrated TailwindCSS and shadcn/ui components
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Button Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
              <CardDescription>
                Various button variants and sizes from shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Card Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Card Components</CardTitle>
              <CardDescription>
                Different card layouts and content examples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a sample card component demonstrating the shadcn/ui card structure.
                Cards are perfect for displaying content in a structured and visually appealing way.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action Button</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TailwindCSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Utility-first CSS framework with responsive design and dark mode support.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Beautiful, accessible components built with Radix UI and Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                React framework with App Router, TypeScript support, and optimized performance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Try different button combinations and see the styling in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => alert('Primary button clicked!')}>
                Click Me
              </Button>
              <Button variant="outline" onClick={() => alert('Outline button clicked!')}>
                Outline Button
              </Button>
              <Button variant="secondary" onClick={() => alert('Secondary button clicked!')}>
                Secondary Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
