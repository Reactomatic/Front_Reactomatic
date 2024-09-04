"use client"

import {
    IconBrandX,
    IconExchange,
    IconHome,
    IconLayoutList,
    IconMoonStars,
    IconNewSection,
    IconTerminal2
} from "@tabler/icons-react";
import Image from "next/image";
import Logo from "@/assets/images/Capture_d_écran_2024-08-31_à_19.41.50-removebg-preview.png";
import { FloatingDock } from "@/components/ui/floating-dock";
import useThemeStore from "@/stores/useThemeStore";

export const Dock = () => {
    const { darkMode, toggleDarkMode } = useThemeStore();

    const links = [
        {
            title: "Accueil",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Mes Configurations",
            icon: (
                <IconLayoutList className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/configurations",
        },
        {
            title: "Créer une Configuration",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/configuration",
        },
        {
            title: "Aceternity UI",
            icon: (
                <Image
                    src={Logo}
                    width={25}
                    height={25}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Mode Sombre",
            icon: (
                <IconMoonStars
                    className="h-full w-full text-neutral-500 dark:text-neutral-300 cursor-pointer"
                    onClick={toggleDarkMode}
                />
            ),
            href: "#",
        },
    ];

    return (
        <div>
            <FloatingDock
                items={links}
            />
        </div>
    );
};

export default Dock;
