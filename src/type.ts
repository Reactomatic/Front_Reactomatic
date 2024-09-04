export type PriceProvider = {
    provider: string;
    price: number;
};

export type Component = {
    id: string;
    name: string;
    price: number;
    description: string;
    pricesByProvider: PriceProvider[];
};

export type ComponentType = 'processeur' | 'carte mère' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

export type Config = {
    [key in ComponentType]?: Component;
};

export type ConfigContextType = {
    config: Config;
    setComponentSelection: (type: PCComponentType, component: Component | undefined) => void;
    getTotalPrice: () => number;
};

export type PCComponentType = 'processeur' | 'carte mère' | 'carte graphique' | 'ram' | 'stockage' | 'boitié' | 'alimentation';

export type Configuration = {
    id: string;
    name: string;
    price: number;
};
