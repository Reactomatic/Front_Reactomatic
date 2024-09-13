// MetadataForm.tsx
import React from "react";
import { Input } from "@/components/ui/input";
import { ComponentType, ComponentSchema, componentSchemas } from "@/types/types";

interface MetadataFormProps {
  componentType: ComponentType;
  metadata: { [key: string]: any };
  setMetadata: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
}

export function MetadataForm({ componentType, metadata, setMetadata }: MetadataFormProps) {
  const schema: ComponentSchema | undefined = componentSchemas[componentType];

  if (!schema) return null; // Return null if no schema is found

  const handleMetadataChange = (key: string, value: any) => {
    setMetadata((prevMetadata) => ({
      ...prevMetadata,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      {schema.metadata.map((field) => (
        <div key={field.key}>
          <label htmlFor={field.key} className="block font-medium">{field.label}</label>
          <Input
            id={field.key}
            name={field.key}
            type={field.type}
            value={metadata[field.key] || ""}
            onChange={(e) => handleMetadataChange(field.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
