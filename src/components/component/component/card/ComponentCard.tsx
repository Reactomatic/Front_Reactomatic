"use client";

import React, { useState } from 'react';
import { useConfig } from "@/context/ConfigContext";
import { ComponentPopup } from "@/components/component/component/component-popup/ComponentPopup";
import { PCComponentType, Component as ComponentModel } from "@/type";

export const ComponentCard: React.FC<{ type: PCComponentType }> = ({ type }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { config, setComponentSelection } = useConfig();
    const selectedComponent = config[type];

    return (
        <div className="bg-white shadow-md rounded-lg p-4 min-h-56 border border-gray-300 dark:border-gray-700 dark:bg-gray-100">
            <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-xl font-semibold mb-2 capitalize">{type}</h2>
                {selectedComponent && (
                    <button
                        className="flex justify-center items-center mb-2"
                        onClick={() => setComponentSelection(type, undefined)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-minus h-7 w-7 bg-orange rounded-md cursor-pointer text-white p-1 shadow-xl">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                        </svg>
                    </button>
                )}
            </div>
            {selectedComponent ? (
                <>
                    <p className="font-medium">{selectedComponent.name}</p>
                    <p className="text-sm text-gray-600">{selectedComponent.description}</p>
                    <p className="mt-2 font-bold">{selectedComponent.price} €</p>
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
