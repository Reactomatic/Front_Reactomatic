import Image from "next/image";
import { ComponentCrud } from "@/components/component/component/admin/componentsCrud";

export default function ConfigurationsPage() {

  return (
    <div className="container mx-auto mt-8 p-4 max-w-screen-xl">

      <ComponentCrud />
    </div>

  );
}
