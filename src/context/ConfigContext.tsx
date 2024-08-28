"use client";

import React, { createContext, useState, useContext } from 'react';
import { Component, PCComponentType, Config, ConfigContextType } from "@/type";

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [config, setConfig] = useState<Config>({});

    const setComponentSelection = (type: PCComponentType, component: Component | undefined) => {
        setConfig(prev => ({ ...prev, [type]: component }));
    };

    const getTotalPrice = () => {
        return Object.values(config).reduce((total, component) => total + (component?.price || 0), 0);
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
