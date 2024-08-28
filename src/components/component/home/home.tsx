/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/c3oqP9RTPRY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {ConfigProvider} from "@/context/ConfigContext";
import {ComponentListCreation} from "@/components/component/component-list/ComponentListCreation";
import { JSX, SVGProps } from "react";
import Ticket from "@/components/component/ticket/Ticket";

export function Home() {
  return (
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1">
          <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-20 md:py-32 lg:py-40">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">Construit ton PC sur
                    mesure</h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
                    Personnalisez le PC de vos rêves avec notre constructeur facile à utiliser.
                  </p>
                  <Link
                      href="#"
                      className="inline-flex items-center justify-center bg-white text-[#1e3a8a] font-medium rounded-md py-3 px-6 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      prefetch={false}
                  >
                    Composez votre PC
                  </Link>
                </div>
                <div className="hidden md:block">
                  <img
                      src="/placeholder.svg"
                      alt="Custom PC"
                      width="500"
                      height="400"
                      className="rounded-lg shadow-lg"
                      style={{aspectRatio: "500/400", objectFit: "cover"}}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col items-center text-center">
                  <CpuIcon className="h-12 w-12 text-[#1e3a8a] mb-4"/>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Choose CPU</h2>
                  <p className="text-muted-foreground">Sélectionnez le processeur parfait pour vos besoins.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MemoryStickIcon className="h-12 w-12 text-[#1e3a8a] mb-4"/>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Choose RAM</h2>
                  <p className="text-muted-foreground">Choisissez la bonne quantité de mémoire.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <CpuIcon className="h-12 w-12 text-[#1e3a8a] mb-4"/>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Choose GPU</h2>
                  <p className="text-muted-foreground">Trouvez la carte graphique parfaite.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-muted py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                <div>
                  <img
                      src="/placeholder.svg"
                      alt="PC Build Preview"
                      width="500"
                      height="400"
                      className="rounded-lg shadow-lg"
                      style={{aspectRatio: "500/400", objectFit: "cover"}}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Découvrez votre construction</h2>
                  <p className="text-muted-foreground mb-8">Prévisualisez votre configuration PC personnalisée avant de
                    commander.</p>
                  <Link
                      href="#"
                      className="inline-flex items-center justify-center bg-[#1e3a8a] text-white font-medium rounded-md py-3 px-6 hover:bg-[#3b82f6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-opacity-75"
                      prefetch={false}
                  >
                    Voir la construction
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Commencer</h2>
                  <p className="text-muted-foreground mb-8">Remplissez le formulaire pour commencer la construction de
                    votre PC personnalisé.</p>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget</Label>
                      <Input id="budget" type="text" placeholder="Enter your budget"/>
                    </div>
                    <Button type="submit" className="w-full">
                      Get Started
                    </Button>
                  </form>
                </div>
                <div className="hidden md:block">
                  <img
                      src="/placeholder.svg"
                      alt="Get Started"
                      width="500"
                      height="400"
                      className="rounded-lg shadow-lg"
                      style={{aspectRatio: "500/400", objectFit: "cover"}}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <ConfigProvider>
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Reactomatic</h1>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <ComponentListCreation/>
              </div>
              <div className="w-full md:w-1/3">
                <Ticket/>
              </div>
            </div>
          </div>
        </ConfigProvider>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 Reactomatic, All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Conditions d'utilisation
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
  )
}

function CpuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function MemoryStickIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 19v-3" />
      <path d="M10 19v-3" />
      <path d="M14 19v-3" />
      <path d="M18 19v-3" />
      <path d="M8 11V9" />
      <path d="M16 11V9" />
      <path d="M12 11V9" />
      <path d="M2 15h20" />
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
    </svg>
  )
}
