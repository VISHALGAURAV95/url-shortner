import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, LinkIcon, Zap, Shield } from 'lucide-react'

export default function Landing() {
  return (
    <div className="flex flex-col  min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">shortlink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link> */}
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12  md:py-24 lg:py-32 xl:py-48">
          <div className="">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Shorten Your URLs with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create short, memorable links in seconds. Boost your online presence with our powerful URL shortener.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="flex-1" placeholder="Enter your long URL" type="url" />
                  <Button type="submit">
                    Shorten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                <LinkIcon className="h-12 w-12 rounded-full border border-border bg-background p-2" />
                <h2 className="text-xl font-bold">Custom Links</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Create branded short links that reflect your business or personal style.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                <Zap className="h-12 w-12 rounded-full border border-border bg-background p-2" />
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Our optimized infrastructure ensures quick redirects and minimal load times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-border p-4 rounded-lg">
                <Shield className="h-12 w-12 rounded-full border border-border bg-background p-2" />
                <h2 className="text-xl font-bold">Secure & Reliable</h2>
                <p className="text-center text-sm text-muted-foreground">
                  Rest easy knowing your links are protected and always available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 vishal. All rights reserved.</p>
       
      </footer>
    </div>
  )
}

