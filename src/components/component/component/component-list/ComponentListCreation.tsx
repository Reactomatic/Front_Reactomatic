import React from 'react';
import {ComponentCard} from "@/components/component/component/card/ComponentCard";
import {ComponentType} from "@/components/component/component/admin/types";

export const ComponentListCreation: React.FC = () => {
    const componentTypes: ComponentType[] = [ComponentType.cpu, ComponentType.motherboard, ComponentType.video_card, ComponentType.case, ComponentType.memory, ComponentType.internal_hard_drive, ComponentType.power_supply];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {componentTypes.map(type => (
                <ComponentCard key={type} type={type} />
            ))}
        </div>
    );
}
