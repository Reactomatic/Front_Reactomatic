"use client"

import { ConfigProvider } from "@/context/ConfigContext";
import Ticket from "@/components/component/ticket/Ticket";
import { ComponentListCreation } from "@/components/component/component/component-list/ComponentListCreation";
import { EditableTitle } from "@/components/component/editableTitle/EditableTitle";
import React, { useState } from "react";
import { ConfigurationList } from "@/components/component/configuration/configuration-list"
import useAuthStore from '@/stores/useAuthStore';
import {ArrowLeft, ArrowLeftFromLine} from "lucide";

export default function ConfigurationPage() {
  const [selectedConfigId, setSelectedConfigId] = useState<string | null>(null);

  const { isAuthenticated } = useAuthStore() as { isAuthenticated: Boolean }

  const handleConfigSelect = (id: string) => {
    setSelectedConfigId(id);
    console.log("Configuration sélectionnée ID :", id);
  };

  if (selectedConfigId || !isAuthenticated) {
    return (
      <ConfigProvider
        id={selectedConfigId}
      >
        <div className="container mt-8 mx-auto h-full overflow-hidden">
          <div className={"flex flex-row space-x-2"}>
            <button
                className={"hover:bg-neutral-200 dark:hover:bg-neutral-500  border dark:border-2 border-neutral-200 dark:border-neutral-700 rounded-md shadow px-2 mb-2"}
                onClick={() => {
                  setSelectedConfigId(null)
                }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-arrow-left-from-line">
                <path d="m9 6-6 6 6 6"/>
                <path d="M3 12h14"/>
                <path d="M21 19V5"/>
              </svg>
            </button>
            <EditableTitle/>
          </div>
          <div className="flex flex-col h-full md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              <ComponentListCreation/>
            </div>
            <div className="w-full md:w-1/3">
              <Ticket/>
            </div>
          </div>
        </div>
      </ConfigProvider>
    );
  } else {
    return (
        <div className="container mx-auto mt-8 p-4 max-w-screen-xl">
          <ConfigurationList onConfigSelect={handleConfigSelect}/>
        </div>
    )
  }
}
