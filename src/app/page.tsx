import Image from "next/image";
import type { Metadata } from "next";
import {Home} from "@/components/component/home/home";

export const metadata: Metadata = {
  title: "Reactomatic",
  description: "Generated by create next app",
};
export default function HomePage() {
  return (
    <div>
      <Home />
    </div>

  );
}
