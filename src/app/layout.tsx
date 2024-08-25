"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import useThemeStore from "@/app/stores/useThemeStore";
import { useEffect } from 'react';


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { darkMode, toggleDarkMode, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
          <nav className="flex items-center gap-6 text-lg font-medium md:flex-1 md:justify-start">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
              <Package2Icon className="w-6 h-6" />
              <span className="sr-only">Reactomatic</span>
            </Link>
            <Link href="/" className="font-bold" prefetch={false}>
              Reactomatic
            </Link>
            <Link href="/components" className="text-muted-foreground" prefetch={false}>
              Composents
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5 leading-none">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-muted-foreground">john@example.com</div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Mes Configurations</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Se déconnecter</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}