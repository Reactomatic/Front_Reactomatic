"use client"

import {
    IconExchange,
    IconHome,
    IconLayoutList,
    IconMoonStars,
    IconNewSection, IconQuestionMark, IconUser
} from "@tabler/icons-react";
import Image from "next/image";
import Logo from "@/assets/images/Capture_d_écran_2024-08-31_à_19.41.50-removebg-preview.png";
import { FloatingDock } from "@/components/ui/floating-dock";
import useThemeStore from "@/stores/useThemeStore";

export const Dock = () => {
    const { toggleDarkMode } = useThemeStore();

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
        {
            title: "A Propos",
            icon: (
                <IconQuestionMark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Connexion",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/login",
        },
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

    return (
        <div>
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
};

export default Dock;
