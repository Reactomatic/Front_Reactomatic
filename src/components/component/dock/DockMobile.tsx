"use client"


import { FloatingDock } from "@/components/ui/floating-dock";

export const Dock = ({ links }: { links: { title: string; icon: React.ReactNode; href?: string }[] }) => {

    return (
        <div>
            <FloatingDock
                items={links}
            />
        </div>
    );
};

export default Dock;
