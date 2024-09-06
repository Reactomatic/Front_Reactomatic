"use client"

import { ConfigProvider } from "@/context/ConfigContext";
import Ticket from "@/components/component/ticket/Ticket";
import { ComponentListCreation } from "@/components/component/component/component-list/ComponentListCreation";
import {EditableTitle} from "@/components/component/editableTitle/EditableTitle";
import {useState} from "react";

export default function ConfigurationPage() {
  const [title, setTitle] = useState('Titre de Ma configuration');


  return (
    <ConfigProvider>
      <div className="container mt-8 mx-auto h-full overflow-hidden">
        <EditableTitle
            initialTitle={title}
            onTitleChange={(newTitle) => setTitle(newTitle)}
        />
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
}
