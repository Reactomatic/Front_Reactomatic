export type Component = {
    id: string;
    name: string;
    price: number;
    description: string;
};

export type ComponentType = 'processeur' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

export type Config = {
    [key in ComponentType]?: Component;
};

export type ConfigContextType = {
    config: Config;
    setComponentSelection: (type: PCComponentType, component: Component | undefined) => void;
    getTotalPrice: () => number;
};

export type PCComponentType = 'processeur' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

