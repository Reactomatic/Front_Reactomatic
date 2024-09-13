// ComponentForm.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import { ComponentData } from "@/types/types";

interface ComponentFormProps {
  data: Omit<ComponentData, "id" | "category" | "metadata">;
  setData: React.Dispatch<React.SetStateAction<Omit<ComponentData, "id" | "category" | "metadata">>>;
}

export function ComponentForm({ data, setData }: ComponentFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block font-medium">Nom de l'article</label>
        <Input
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price" className="block font-medium">Prix</label>
        <Input
          id="price"
          name="price"
          type="number"
          value={data.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="brand" className="block font-medium">Marque</label>
        <Input
          id="brand"
          name="brand"
          value={data.brand}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
