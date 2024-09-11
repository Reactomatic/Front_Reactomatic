import { FloatingDock } from "@/components/ui/floating-dock";

export const DockDesktop = ({ links }: { links: { title: string; icon: React.ReactNode; href?: string }[] }) => {

    return (
        <div>
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
};

export default DockDesktop;
