import type { Metadata } from "next";
import { ReactNode } from "react";
import { Navbar } from "@/components/component/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Dock from "@/components/component/dock/Dock";
import DockMobile from "@/components/component/dock/DockMobile";

export const metadata: Metadata = {
    title: "Reactomatic",
    description: "Votre application Next.js avec une navigation améliorée",
};



export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <body>
                <main>{children}</main>
                <Toaster />

                <Dock />

            </body>
        </html>
    );
}
