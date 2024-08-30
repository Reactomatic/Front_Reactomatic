"use client"

import React, { useState } from 'react';
import { useConfig } from "@/context/ConfigContext";
import { ComponentPopup } from "@/components/component/component/component-popup/ComponentPopup";
import { PCComponentType, Component as ComponentModel, PriceProvider } from "@/type";
import Amazon from '@/assets/images/amazon-removebg-preview.png'
import Ldlc from '@/assets/images/ldlc-removebg-preview.png'
import Material from '@/assets/images/material-removebg-preview.png'
import Image from "next/image";

export const ComponentCard: React.FC<{ type: PCComponentType }> = ({ type }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { config, setComponentSelection } = useConfig();
    const selectedComponent = config[type];

    const renderProviderPrice = (pricesByProvider: PriceProvider[]) => {
        return pricesByProvider.map(({ provider, price }) => (
                <div key={provider}
                     className="grid grid-cols-2 place-items-center bg-neutral-800 text-white dark:bg-neutral-600 dark:border py-2 px-2 rounded-md space-x-0.5">
                    {provider === "Amazon" && (
                        <Image
                            priority
                            src={Amazon}
                            height={25}
                            width={25}
                            alt="Follow us on Twitter"
                            className={""}
                        />
                    )}
                    {provider === "LDLC" && (
                        <Image
                            priority
                            src={Ldlc}
                            height={20}
                            width={20}
                            alt="Follow us on Twitter"
                            className={""}
                        />                )}
                    {provider === "Materiel.net" && (
                        <Image
                            priority
                            src={Material}
                            height={25}
                            width={25}
                            alt="Follow us on Twitter"
                            className={""}
                        />   )}
                    <span className="font-semibold text-md dark:text-white">{price}€</span>
                </div>

        ));
    };

    return (
        <div
            className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-4 min-h-56 border border-gray-300 dark:border-neutral-700">
            <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-xl font-semibold mb-2 capitalize">{type}</h2>
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
                            <path d="M5 12h14"/>
                        </svg>
                    </button>
                )}
            </div>
            {selectedComponent ? (
                <>
                    <p className="font-medium whitespace-nowrap">{selectedComponent.name}</p>
                    <p className="text-sm text-gray-600 dark:text-neutral-500 pt-1">{selectedComponent.description}</p>
                    <div className={"grid grid-cols-2 gap-2 pt-2"}>
                        {renderProviderPrice(selectedComponent.pricesByProvider)}
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
                    onSelect={(component: ComponentModel) => {
                        setComponentSelection(type, component);
                        setIsPopupOpen(false);
                    }}
                />
            )}
        </div>
    );
};
