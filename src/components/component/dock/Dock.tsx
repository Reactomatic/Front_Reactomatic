"use client";

import DockDesktop from "@/components/component/dock/DockDesktop";
import DockMobile from "@/components/component/dock/DockMobile";

import {
  IconHome,
  IconLayoutList,
  IconMoonStars,
  IconNewSection, IconQuestionMark, IconUser, IconUserShield, IconLetterC
} from "@tabler/icons-react";
import Image from "next/image";
import Logo from "@/assets/images/Capture_d_écran_2024-08-31_à_19.41.50-removebg-preview.png";

import useThemeStore from "@/stores/useThemeStore";
import useAuthStore from "@/stores/useAuthStore";

export const Dock = () => {
  const { toggleDarkMode } = useThemeStore();
  const { isAuthenticated, isAdmin } = useAuthStore() as { isAuthenticated: boolean, isAdmin: boolean };

  const links: { title: string; icon: React.ReactNode; href?: string }[] = [

    // Home
    {
      title: "Accueil",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    // Create Configuration
    {
      title: "Créer une Configuration",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/configuration",
    },

    // Logo, actualise la page pour l'instant TODO
    {
      title: "Reactomatic",
      icon: (
        <Image
          src={Logo}
          width={25}
          height={25}
          alt="Aceternity Logo"
          className={"hover:animate-spin duration-100"}
        />
      ),
      href: "#",
    },

    // About
    {
      title: "À Propos",
      icon: (
        <IconQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },

    // About
    {
      title: "Contact",
      icon: (
        <IconLetterC className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    // Profile
    (isAuthenticated ?
      {
        title: "Profile",
        icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/profile",
      }
      :
      {
        title: "Se connecter",
        icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/login",
      }
    ),

    // Dark Mode
    {
      title: "Mode Sombre",
      icon: (
        <IconMoonStars
          className="h-full w-full text-neutral-500 dark:text-neutral-300 cursor-pointer"
          onClick={toggleDarkMode}
        />
      ),
    },
  ];

  if (isAdmin) {
    links.push(
      {
        title: "Admin",
        icon: (
          <IconUserShield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/admin",
      }
    )
  }

  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <DockDesktop links={links} />
      </div>
      <div className="sm:block lg:hidden md:hidden fixed bottom-5 right-5 mb-4">
        <DockMobile links={links} />
      </div>
    </>
  )
};

export default Dock;