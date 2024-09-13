import React from 'react';
import { ComponentCard } from "@/components/component/component/card/ComponentCard";
import { ComponentType } from "@/types/types";

export const ComponentListCreation: React.FC = () => {
    /*const componentTypes: ComponentType[] = [
        ComponentType.cpu,
        ComponentType.motherboard,
        ComponentType.video_card,
        ComponentType.case,
        ComponentType.memory,
        ComponentType.internal_hard_drive,
        ComponentType.power_supply
    ];*/
    const componentTypes: ComponentType[] = Object.values(ComponentType);


    return (
        <div className="h-[80vh] border-2 border-neutral-100 dark:border-neutral-700 shadow-md rounded-lg overflow-y-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {componentTypes.map(type => (
                    <ComponentCard key={type} type={type} />
                ))}
            </div>
        </div>
    );
}
