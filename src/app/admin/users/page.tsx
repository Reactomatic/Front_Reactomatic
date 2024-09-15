import Image from "next/image";
import UserDataTable from "@/components/component/users/usersDatatable";

export default function ConfigurationsPage() {

  return (
    <div className="container mx-auto mt-8 p-4 max-w-screen-xl">

      <UserDataTable />
    </div>

  );
}
