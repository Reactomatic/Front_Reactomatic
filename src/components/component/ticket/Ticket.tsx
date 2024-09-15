"use client"

import React from 'react';
import { useConfig } from "@/context/ConfigContext";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ComponentData } from "@/types/types";

export default function Ticket() {
    const { config, getTotalPrice } = useConfig();

    const selectedItems = Object.values(config).filter((item): item is ComponentData => !!item);

    const total = getTotalPrice();
    const date = new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });


    return (
        <Card className="flex justify-center content-center flex-col w-80 h-full mx-auto font-mono text-sm shadow-md dark:bg-neutral-800 dark:border-neutral-700">
            <CardHeader className="flex flex-col items-center text-center border-b border-dashed border-gray-300">
                <div className="text-xs">{'*'.repeat(38)}</div>
                <h2 className="text-xl font-bold">REÇU</h2>
                <p className="text-xs font-extralight">Ne fait pas office de reçu officel</p>
                <div className="text-xs">{'*'.repeat(38)}</div>
            </CardHeader>
            <CardContent className="p-4 space-y-4 h-[40vh]">
                <h3 className="text-center font-bold">REACTOMATIC</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Date:</span>
                    <span>{date}</span>
                </div>
                <div className="border-t border-b border-gray-300 py-2 max-h-60 overflow-auto">
                    <div className="flex justify-between font-bold">
                        <span>Description</span>
                        <span>Price</span>
                    </div>
                    {selectedItems.map((item, index) => (
                        <div key={index} className="flex justify-between space-x-2">
                            <span className="whitespace-nowrap overflow-hidden">{item.name}</span>
                            <span>€{Math.round(item.price)}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between font-bold">
                    <span>Tax</span>
                    <span></span>
                </div>
                <div className="flex justify-between font-bold">
                    <span>TOTAL</span>
                    <span>€{Math.round(total)}</span>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4">
                <div className="font-bold pt-10">THANK YOU</div>
                <div className="text-xs">{'*'.repeat(38)}</div>
                <div className="w-full h-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==')]"></div>
                <div className="text-xs">123456778963578021</div>
            </CardFooter>
        </Card>
    );
}
