"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { ComponentData, ComponentType, Config, ConfigContextType } from "@/types/types";
import useConfigurationStore from '@/stores/useConfigurationStore';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from 'next/navigation';


const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ id: string | null; children: React.ReactNode }> = ({ id, children }) => {
    const { fetchConfigurationById, updateConfigurationUser } = useConfigurationStore() as { fetchConfigurationById: Function, updateConfigurationUser: Function };
    const [loading, setLoading] = useState<boolean>(true);
    const { toast } = useToast();
    const router = useRouter();

    const [config, setConfig] = useState<Config>({});


    const handleFetchConfig = async () => {
        try {
            const result = await fetchConfigurationById(id);
            if (result.status === 200) {
                const components = result.data.components;
                const configData = components.reduce((acc: any, component: any) => {
                    acc[component.category] = component;
                    return acc;
                }, {});
                setConfig(configData);
                setTitle(result.data.name)
            } else {
                toast({
                    title: "Erreur de chargement",
                    description: "Impossible de charger les données. Veuillez réessayer.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            throw new Error("Impossible de charger les données. Veuillez réessayer.");
        }
    };

    const getConfigComponentIds = () => {
        return Object.values(config)
            .filter((component) => component !== undefined)
            .map((component) => component!.id);
    };

    const handleUpdateConfig = async () => {
        const configComponentIds = getConfigComponentIds();

        try {
            const result = await updateConfigurationUser(id, title, configComponentIds);
            if (result.status !== 200) {
                toast({
                    title: "Erreur de chargement",
                    description: "Impossible de mettre à jour les données. Veuillez réessayer.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            throw new Error("Impossible de charger les données. Veuillez réessayer.");
        }
    };

    useEffect(() => {
        if (id) {
            setLoading(true)
            handleFetchConfig();
            setLoading(false)
        }
    }, [id]);

    const setComponentSelection = (type: ComponentType, component: ComponentData | undefined) => {
        setConfig(prev => ({ ...prev, [type]: component }));
        if (id)
            if (loading == false)
                handleUpdateConfig();
    };

    const getTotalPrice = () => {
        const total = Object.values(config).reduce((total, component) => {
            const price = component?.price ? parseFloat(String(component.price)) : 0;
            return total + price;
        }, 0);
        return parseFloat(total.toFixed(2));
    };



    const [title, setStateTitle] = useState('Ma configuration');

    const setTitle = (newTitle: any) => {
        setStateTitle(newTitle)
        if (id) {
            if (loading == false)
                handleUpdateConfig();
        }
        else {
            toast({
                title: "Sauvegarde impossible",
                description: "Tu dois te connecter à Reactomatic pour sauvegarder ta config.",
                action: <ToastAction altText="Try again" onClick={() => { router.push('/login') }}>Se connecter</ToastAction>,
            });
        }
    }

    return (
        <ConfigContext.Provider value={{ config, setComponentSelection, getTotalPrice, title, setTitle }}>
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
