import Image from "next/image";
import { ConfigurationList } from "@/components/component/configuration/configuration-list"

export default function ConfigurationsPage() {
  const configurations = [
    { name: 'Configuration 1', price: '1825,99€' },
    { name: 'Configuration 2', price: '1999,99€' },
    { name: 'Configuration 3', price: '1520,50€' },
  ];
  return (
    <div className="container mx-auto mt-8 p-4 max-w-screen-xl">

      <ConfigurationList configurations={configurations} />;
    </div>

  );
}
