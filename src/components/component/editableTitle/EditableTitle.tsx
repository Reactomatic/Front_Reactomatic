import React, { useState } from 'react';
import { Edit3, Save } from 'lucide-react';
import { useConfig } from "@/context/ConfigContext";
import { useToast } from "@/components/ui/use-toast"


export const EditableTitle = () => {

    const { title, setTitle } = useConfig();
    const { toast } = useToast()
    const [isEditing, setIsEditing] = useState(false);
    const [localTitle, setLocalTitle] = useState(title)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 25) {
            setLocalTitle(e.target.value);
        }
    };

    const handleSave = () => {
        setTitle(localTitle);
        setIsEditing(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
        }
    };

    const foncyionDeMerde = () => {
        setIsEditing(true)
        setLocalTitle(title)
    }

    return (
        <div
            className="flex items-center border dark:border-2 border-neutral-200 dark:border-neutral-700 rounded-md shadow overflow-hidden justify-between px-2 mb-2 w-96">
            {!isEditing ? (
                <h1 className="text-2xl font-bold w-full">{title}</h1>
            ) : (
                <input
                    type="text"
                    value={localTitle}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyPress}
                    className="text-2xl font-bold border-b border-neutral-200 focus:outline-none focus:border-neutral-200 w-full dark:bg-background"
                />
            )}
            <button
                onClick={() => (isEditing ? setIsEditing(false) : foncyionDeMerde())}
                className="p-2"
            >
                <Edit3
                    className="h-7 w-7 hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-300" />
            </button>
            <button
                onClick={() => handleSave()}
                className=""
            >
                <Save className="h-7 w-7 hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-300" />
            </button>
        </div>
    );
};
