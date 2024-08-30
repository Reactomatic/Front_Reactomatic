import { ConfigProvider } from "@/context/ConfigContext";
import Ticket from "@/components/component/ticket/Ticket";
import { ComponentListCreation } from "@/components/component/component/component-list/ComponentListCreation";

export default function ConfigurationPage() {
  return (
    <ConfigProvider>
      <div className="container mx-auto h-full mt-8">
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
