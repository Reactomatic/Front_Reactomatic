"use client";

import React, { createContext, useState, useContext } from 'react';
import {ComponentData, ComponentType, Config, ConfigContextType} from "@/components/component/component/admin/types";

// Alias pour rendre PCComponentType et ComponentType compatibles
type PCComponentType = ComponentType; // Ajoutez cet alias si nécessaire

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [config, setConfig] = useState<Config>({});

    const setComponentSelection = (type: ComponentType, component: ComponentData | undefined) => {
        setConfig(prev => ({ ...prev, [type]: component }));
    };

    const getTotalPrice = () => {
        return Object.values(config).reduce((total, component) => total + (component?.price || 0), 0);
    };

    type ConfigContextType = {
        config: Config;
        setComponentSelection: (type: ComponentType, component: ComponentData | undefined) => void;
        getTotalPrice: () => number;
    };

    return (
        <ConfigContext.Provider value={{ config, setComponentSelection, getTotalPrice }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (context === undefined) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
