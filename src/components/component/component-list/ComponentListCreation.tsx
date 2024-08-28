import React from 'react';
import { ComponentCard } from "@/components/component/card/ComponentCard";
import { PCComponentType } from "@/type";

export const ComponentListCreation: React.FC = () => {
    const componentTypes: PCComponentType[] = ['processeur', 'carte graphique', 'ram', 'stockage', 'boitié', 'alimentation'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {componentTypes.map(type => (
                <ComponentCard key={type} type={type} />
            ))}
        </div>
    );
};
