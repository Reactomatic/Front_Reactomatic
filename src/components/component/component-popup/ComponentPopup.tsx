import React, { useState } from 'react';
import componentsData from '@/data/components.json';
import { ComponentType, Component } from "@/type";
import { Button } from "@/components/ui/button";

interface ComponentPopupProps {
    type: ComponentType;
    onClose: () => void;
    onSelect: (component: Component) => void;
}

export const ComponentPopup: React.FC<ComponentPopupProps> = ({ type, onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const components = componentsData[type] || [];

    const filteredComponents = components.filter((component) =>
        component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative bg-white rounded-lg p-4 max-w-md w-full">
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

                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="max-h-96 overflow-y-auto">
                    {filteredComponents.map((component: Component) => (
                        <div
                            key={component.id}
                            className="border border-gray-300 rounded-lg mb-4 p-4 cursor-pointer hover:bg-gray-100"
                            onClick={() => onSelect(component)}
                        >
                            <p className="font-medium">{component.name}</p>
                            <p className="text-sm text-gray-600">{component.description}</p>
                            <p className="mt-1 font-bold">{component.price} €</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
