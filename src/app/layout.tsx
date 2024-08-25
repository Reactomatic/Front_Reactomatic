import type { Metadata } from "next";
import { ReactNode } from "react";
import { Navbar } from "@/components/component/navbar/navbar";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

export const metadata: Metadata = {
  title: "Reactomatic",
  description: "Votre application Next.js avec une navigation améliorée",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
