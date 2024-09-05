"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { Package2Icon } from "@/components/icons/package2-icon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useThemeStore from "@/stores/useThemeStore";

const inter = Inter({ subsets: ["latin"] });

export function Navbar() {
  const { darkMode, toggleDarkMode, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <header className={`flex items-center h-16 px-4 border-b md:px-6 ${inter.className}`}>
      <nav className="flex items-center gap-6 md:flex-1">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <Package2Icon className="w-6 h-6" />
          <span>Reactomatic</span>
        </Link>
        <Link href="/configurations" className="text-muted-foreground" prefetch={false}>
          Voir mes configurations
        </Link>
        <Link href="/configuration" className="text-muted-foreground" prefetch={false}>
          Configuration
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={toggleDarkMode}>
          {darkMode ? "Mode Clair" : "Mode Sombre"}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="sr-only">Ouvrir le menu utilisateur</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center gap-2 p-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">John Doe</span>
                <span className="text-sm text-muted-foreground">john@example.com</span>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" prefetch={false}>
                Profil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" prefetch={false}>
                Mes Configurations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/logout" prefetch={false}>
                Se déconnecter
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}