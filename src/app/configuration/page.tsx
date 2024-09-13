"use client"

import { ConfigProvider } from "@/context/ConfigContext";
import Ticket from "@/components/component/ticket/Ticket";
import { ComponentListCreation } from "@/components/component/component/component-list/ComponentListCreation";
import { EditableTitle } from "@/components/component/editableTitle/EditableTitle";
import { useState } from "react";
import { ConfigurationList } from "@/components/component/configuration/configuration-list"
import useAuthStore from '@/stores/useAuthStore';
import { Button } from "@/components/ui/button";

export default function ConfigurationPage() {
  // const [title, setTitle] = useState('Ma configuration');
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
          <Button onClick={() => { setSelectedConfigId(null) }}>Retour</Button>
          <EditableTitle />
          <div className="flex flex-col h-full md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              <ComponentListCreation />
            </div>
            <div className="w-full md:w-1/3">
              <Ticket />
            </div>
          </div>
        </div>
      </ConfigProvider>
    );
  } else {
    return (
      <div className="container mx-auto mt-8 p-4 max-w-screen-xl">
        <ConfigurationList onConfigSelect={handleConfigSelect} />;
      </div>
    )
  }
}
