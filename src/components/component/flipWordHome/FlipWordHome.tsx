import React from "react";
import {FlipWords} from "@/components/ui/flip-words";

export function FlipWordsHome() {
    const words = ["mieux", "mignon", "beau", "moderne"];

    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Configurez
                <FlipWords words={words} /> <br />
                avec votre assistant Reactomatic
            </div>
        </div>
    );
}
