"use client";

import React, { useState } from 'react';
import { useConfig } from "@/context/ConfigContext";
import {
    ComponentType,
    ComponentData,
    PriceByRetailer,
} from "@/types/types";
import Amazon from '@/assets/images/Amazon_Symbol_15.svg';
import Ldlc from '@/assets/images/ldlc-removebg-preview.png';
import Cybertek from '@/assets/images/cybertek.png';
import Image from "next/image";
import { ComponentPopup } from "@/components/component/component/component-popup/ComponentPopup";

export const ComponentCard: React.FC<{ type: ComponentType }> = ({ type }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { config, setComponentSelection } = useConfig();
    const selectedComponent = config[type as unknown as keyof typeof config];

    const renderProviderPrice = (pricesByRetailer: PriceByRetailer[]) => {
        const retailers = ["Amazon FR", "Amazon DE", "LDLC", "Cybertek"];

        return retailers.map((retailer, index) => {
            const priceData = pricesByRetailer.find((p) => p.retailer === retailer);

            return (
                <a
                    href={priceData?.url || "#"}
                    target="_blank"
                    key={index}
                    className={`grid grid-cols-3 gap-2 place-items-center bg-neutral-200 dark:bg-neutral-600 text-black dark:border py-2 px-2 rounded-md`}
                >
                    {retailer === "Amazon FR" || retailer === "Amazon DE" ? (
                        <Image
                            priority
                            src={Amazon}
                            height={25}
                            width={25}
                            alt="Amazon Logo"
                            className="pr-1"
                        />
                    ) : retailer === "LDLC" ? (
                        <Image
                            priority
                            src={Ldlc}
                            height={20}
                            width={20}
                            alt="LDLC Logo"
                            className="pr-1"
                        />
                    ) : retailer === "Cybertek" ? (
                        <Image
                            priority
                            src={Cybertek}
                            height={25}
                            width={25}
                            alt="Cybertek Logo"
                            className="pr-1"
                        />
                    ) : null}

                    {priceData ? (
                        <span className="font-semibold col-span-2 text-md dark:text-white">{Math.round(priceData.price)}€</span>
                    ) : (
                        <span className="font-semibold col-span-2 text-md text-red-600 dark:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-x mr-4 w-5 h-5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </span>
                    )}
                </a>
            );
        });
    };
    ;

    return (
        <div
            className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 min-h-56 border border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-xl font-semibold mb-2 capitalize">
                    {getComponentTypeDisplayName(type)}
                </h2>
                {selectedComponent && (
                    <button
                        className="flex justify-center items-center mb-2"
                        onClick={() => setComponentSelection(type, undefined)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-minus h-7 w-7 bg-orange rounded-md cursor-pointer text-white p-1 shadow-xl">
                            <path d="M5 12h14" />
                        </svg>
                    </button>
                )}
            </div>
            {selectedComponent ? (
                <>
                    <p className="text-xl font-semibold text-gray-600 dark:text-neutral-500 pt-1">{selectedComponent.brand}</p>
                    <p className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {selectedComponent.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-400 pt-2 whitespace-nowrap overflow-hidden">
                        {selectedComponent?.metadata?.slice(0, 4).map((meta, index) => (
                            <span key={index}>
                                {meta.key}: {meta.value}
                                {index < 3 && ' '}
                            </span>
                        ))}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                        {selectedComponent.priceByRetailer && renderProviderPrice(selectedComponent.priceByRetailer)}
                    </div>
                </>
            ) : (
                <button
                    className="flex items-center justify-center w-full h-4/5 text-center text-sm"
                    onClick={() => setIsPopupOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-circle-minus h-10 w-10 bg-green rounded-md cursor-pointer text-white p-1 shadow-xl">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </button>
            )}
            {isPopupOpen && (
                <ComponentPopup
                    type={type}
                    onClose={() => setIsPopupOpen(false)}
                    onSelect={(component: ComponentData) => {
                        setComponentSelection(type, component);
                        setIsPopupOpen(false);
                    }}
                />
            )}
        </div>
    );
};

// Fonction pour afficher le nom en fonction du type
export const getComponentTypeDisplayName = (type: ComponentType): string => {
    switch (type) {
        case "case_accessory":
            return "Accessoires";
        case "case_fan":
            return "Ventilateurs";
        case "case":
            return "Boitier";
        case "cpu_cooler":
            return "Ventirad";
        case "cpu":
            return "Processeur";
        case "external_hard_drive":
            return "Disque dur externe";
        case "internal_hard_drive":
            return "Disque dur interne";
        case "fan_controller":
            return "Fan Contrôleur";
        case "headphones":
            return "Casque";
        case "keyboard":
            return "Clavier";
        case "memory":
            return "Mémoire";
        case "monitor":
            return "Moniteur";
        case "motherboard":
            return "Carte mère";
        case "mouse":
            return "Souris";
        case "optical_drive":
            return "Lecteur optique";
        case "os":
            return "Système d'exploitation";
        case "power_supply":
            return "Alimentation";
        case "sound_card":
            return "Carte son";
        case "speakers":
            return "Haut-parleurs";
        case "thermal_paste":
            return "Pâte thermique";
        case "ups":
            return "Onduleur (UPS)";
        case "video_card":
            return "Carte graphique";
        case "webcam":
            return "Webcam";
        case "wired_network_card":
            return "Carte réseau filaire";
        case "wireless_network_card":
            return "Carte réseau sans fil";
        default:
            return "Composant inconnu";
    }
};
