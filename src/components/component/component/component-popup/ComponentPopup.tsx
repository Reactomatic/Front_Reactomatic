import React, { useState, useEffect } from 'react';
import { ComponentType, ComponentData, componentSchemas, configRequirements } from "@/types/types";
import { Button } from "@/components/ui/button";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as Popover from "@radix-ui/react-popover";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useConfig } from "@/context/ConfigContext";


import useComponentStore from '@/stores/useComponentStore';

interface ComponentPopupProps {
    type: ComponentType;
    onClose: () => void;
    onSelect: (component: ComponentData) => void;
}

const ComponentHoverPreview: React.FC<{ component: ComponentData }> = ({ component }) => (
    <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg min-w-56 shadow-md">
        <h3 className="font-bold text-lg mb-2">{component.name}</h3>
        <p className="text-sm text-gray-600 dark:text-neutral-500">{component.brand}</p>
        <div className="text-sm mt-2">
            {component?.metadata?.map((meta, index) => (
                <p key={index}>
                    <strong>{meta.label}:</strong> {meta.value}
                </p>
            ))}
        </div>
        <div className="mt-4">
            {component?.priceByRetailer?.map(({ retailer, price }, index) => (
                <div key={index} className="flex justify-between">
                    <span>{retailer}</span>
                    <span>{price}€</span>
                </div>
            ))}
        </div>
    </div>
);

export const ComponentPopup: React.FC<ComponentPopupProps> = ({ type, onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]); // Tranches de prix sélectionnées
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]); // Marques sélectionnées
    const [components, setComponents] = useState([] as ComponentData[])

    const { fetchComponents } = useComponentStore() as { fetchComponents: Function }
    const { toast } = useToast();

    const { config } = useConfig();


    // const components = componentsData[type as keyof typeof componentsData] as ComponentData[] || [];

    useEffect(() => {
        handleFetchComponent();
    }, []);

    // Extraire les marques uniques des composants
    const uniqueBrands = Array.from(new Set(components.map((component) => component.brand)));

    // Tranches de prix
    const priceRanges = [
        { label: '0 - 100€', min: 0, max: 100 },
        { label: '101 - 500€', min: 101, max: 500 },
        { label: '501 - 1000€', min: 501, max: 1000 },
        { label: '1000€ et plus', min: 1001, max: Infinity },
    ];

    const filteredComponents = components.filter((component: ComponentData) =>
        component.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const { min, max } = priceRanges.find(p => p.label === range)!;
            return component.price >= min && component.price <= max;
        })) &&
        (selectedBrands.length === 0 || selectedBrands.includes(component.brand))
    );

    const handleBrandChange = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handlePriceRangeChange = (range: string) => {
        setSelectedPriceRanges(prev =>
            prev.includes(range)
                ? prev.filter(r => r !== range)
                : [...prev, range]
        );
    };

    const handleFetchComponent = async () => {
        try {
            const result = await fetchComponents();

            if (result.status === 200) {
                const componentData = result.data

                const componentsFiltered = componentData.filter((component: ComponentData) => {
                    return component.category == type
                });

                const requirements = configRequirements[type]
                console.log(requirements)

                if (Object.keys(requirements).length == 0) {
                    setComponents(componentsFiltered.map((component: any) => {
                        return {
                            ...component,
                            price: parseFloat(component.price)
                        };
                    }));
                } else {
                    const componentsFilteredByCompatibilities = componentsFiltered.filter((component: ComponentData) => {
                        return Object.entries(requirements).every(([composantType, metadataKey]) => {
                            const componentType = composantType as ComponentType;

                            const selectedComponent = config[componentType];
                            if (!selectedComponent) return true;

                            const configMetaRequired = selectedComponent.metadata?.find(el => el.key === metadataKey);
                            if (!configMetaRequired) return false;

                            const componentMetaValue = component.metadata?.find(el => el.key === metadataKey);
                            if (!componentMetaValue) return false;

                            return configMetaRequired.value === componentMetaValue.value;
                        });
                    });



                    // HERE NEW FILTER

                    setComponents(componentsFilteredByCompatibilities.map((component: any) => {
                        return {
                            ...component,
                            price: parseFloat(component.price)
                        };
                    }));
                }
            } else {
                toast({
                    title: "Erreur de chargement",
                    description: "Impossible de charger les données. Veuillez réessayer.",
                    variant: "destructive",
                });
            }
        } catch (error: any) {
            throw new Error("Impossible de charger les données. Veuillez réessayer.");
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative bg-white dark:bg-neutral-900 rounded-lg p-4 max-w-md w-full min-h-[50vh]">
                <Button
                    variant={"destructive"}
                    onClick={onClose}
                    className="absolute top-4 right-4 w-7 h-7 p-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"
                        id="Close--Streamline-Ionic-Filled" height="20" width="20">
                        <path fill="#ffffff"
                            d="M29.868 24.0002 46.2923 7.5756c0.7794 -0.778 1.2179 -1.834 1.2188 -2.9353 0.0012 -1.1016 -0.4355 -2.1583 -1.2136 -2.9376 -0.7782 -0.7795 -1.8342 -1.2181 -2.9356 -1.219 -1.1013 -0.0009 -2.158 0.4356 -2.9374 1.2138L24 18.1219 7.5756 1.6975C6.7961 0.918 5.7388 0.48 4.6366 0.48c-1.1027 0 -2.1597 0.438 -2.9393 1.2175C0.9178 2.4769 0.48 3.5341 0.48 4.6366c0 1.1024 0.4378 2.1595 1.2173 2.939l16.4246 16.4246L1.6973 40.4245C0.9178 41.2039 0.48 42.2611 0.48 43.3636c0 1.1024 0.4378 2.1597 1.2173 2.9392 0.7796 0.7794 1.8366 1.2172 2.9393 1.2172 1.1022 0 2.1595 -0.4378 2.939 -1.2172L24 29.8783l16.4245 16.4245c0.7794 0.7794 1.8367 1.2172 2.9391 1.2172 1.1023 0 2.1595 -0.4378 2.939 -1.2172 0.7794 -0.7795 1.2174 -1.8368 1.2174 -2.9392 0 -1.1025 -0.438 -2.1597 -1.2174 -2.9391L29.8679 24.0002Z"
                            strokeWidth="1"></path>
                    </svg>
                </Button>

                <h2 className="text-2xl font-bold mb-4 capitalize">{type}</h2>

                <div className="flex items-center space-x-2">
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="mb-4 p-2 border-2 rounded-lg bg-background">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>                            </button>
                        </Popover.Trigger>

                        <Popover.Content className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
                            <h3 className="font-bold text-sm mb-2">Filtres</h3>

                            <div className="mb-4">
                                <h4 className="font-semibold">Prix</h4>
                                {priceRanges.map((range) => (
                                    <label key={range.label} className="block mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedPriceRanges.includes(range.label)}
                                            onChange={() => handlePriceRangeChange(range.label)}
                                            className="mr-2"
                                        />
                                        {range.label}
                                    </label>
                                ))}
                            </div>

                            <div className="mb-4">
                                <h4 className="font-semibold">Marques</h4>
                                {uniqueBrands.map((brand) => (
                                    <label key={brand} className="block mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandChange(brand)}
                                            className="mr-2"
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>
                        </Popover.Content>
                    </Popover.Root>

                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="mb-4 p-2 border border-gray-300 rounded-lg w-full dark:bg-neutral-900 dark:border-neutral-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="max-h-96 overflow-y-auto min-h-[50vh]">
                    {filteredComponents.map((component: ComponentData) => (
                        <HoverCardPrimitive.Root key={component.id} openDelay={50} closeDelay={100}>
                            <HoverCardPrimitive.Trigger asChild>
                                <div
                                    className="border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer hover:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700"
                                    onClick={() => onSelect(component)}
                                >
                                    <p className="font-medium">{component.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-neutral-400 pt-2 whitespace-nowrap overflow-hidden">
                                        {component?.metadata?.slice(0, 3).map((meta, index) => (
                                            <span key={index}>
                                                {meta.label}: {meta.value}{index < 3 && ' '}
                                            </span>))}
                                    </p>
                                </div>
                            </HoverCardPrimitive.Trigger>

                            <HoverCardPrimitive.Content side="right" align="center" sideOffset={10}>
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="shadow-xl rounded-xl bg-white dark:bg-neutral-800"
                                    >
                                        <ComponentHoverPreview component={component} />
                                    </motion.div>
                                </AnimatePresence>
                            </HoverCardPrimitive.Content>
                        </HoverCardPrimitive.Root>
                    ))}
                </div>
            </div>
        </div>
    );
};
