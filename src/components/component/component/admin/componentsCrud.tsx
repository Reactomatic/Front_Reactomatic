"use client";
// ComponentCrud.tsx
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { MetadataForm } from "./metadataForm";
import { ComponentForm } from "./componentForm";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ComponentData, ComponentType } from "./types";

export function ComponentCrud() {
  const [data, setData] = useState<ComponentData[]>([
    {
      id: 1,
      category: ComponentType.cpu,
      name: "AMD Ryzen 9 5900X",
      price: 549.99,
      brand: "AMD",
      metadata: [
        { key: "socket", value: "AM4" },
        { key: "cores", value: 12 },
        { key: "threads", value: 24 },
      ],
    },
    {
      id: 2,
      category: ComponentType.motherboard,
      name: "ASUS ROG Strix X570-E",
      price: 299.99,
      brand: "ASUS",
      metadata: [
        { key: "socket", value: "AM4" },
        { key: "formFactor", value: "ATX" },
        { key: "chipset", value: "X570" },
      ],
    },
    {
      id: 3,
      category: ComponentType.memory,
      name: "Corsair Vengeance RGB Pro 32GB",
      price: 159.99,
      brand: "Corsair",
      metadata: [
        { key: "speed", value: "3200MHz" },
        { key: "type", value: "DDR4" },
        { key: "modules", value: 2 },
      ],
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState<keyof ComponentData>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editComponent, setEditComponent] = useState<number | null>(null);

  const [componentType, setComponentType] = useState<ComponentType>(ComponentType.cpu);
  const [metadata, setMetadata] = useState<{ [key: string]: any }>({});
  const [formData, setFormData] = useState<Omit<ComponentData, "id" | "category" | "metadata">>({
    name: "",
    price: 0,
    brand: "",
  });

  const handleSort = (column: keyof ComponentData) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreate = () => {
    const newComponent: ComponentData = {
      id: Math.random(), // Replace with actual unique ID logic
      category: componentType,
      name: formData.name,
      price: formData.price,
      brand: formData.brand,
      metadata: Object.entries(metadata).map(([key, value]) => ({ key, value })),
    };
    setData([...data, newComponent]);
    setIsDialogOpen(false);
    resetForm();
  };

  const handleUpdate = (id: number) => {
    const updatedComponent = data.map((item) =>
      item.id === id ? { ...item, ...formData, metadata: Object.entries(metadata).map(([key, value]) => ({ key, value })) } : item
    );
    setData(updatedComponent);
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const openDialog = (component: ComponentData | null = null) => {
    setIsDialogOpen(true);
    if (component) {
      setFormData({
        name: component.name,
        price: component.price,
        brand: component.brand,
      });
      setComponentType(component.category);
      setMetadata(component.metadata?.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {}) || {});
      setEditComponent(component.id);
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: 0,
      brand: "",
    });
    setMetadata({});
    setEditComponent(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button onClick={() => openDialog()}>Create</Button>
      </div>
      <div className="overflow-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                Name
                {sortColumn === "name" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
                Category
                {sortColumn === "category" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("price")}>
                Price
                {sortColumn === "price" && <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => openDialog(item)}>
                      <FilePenIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleDelete(item.id)}>
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalItems={sortedData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <div className="p-6">
            <div className="flex flex-col gap-4">
              <Select
                defaultValue={componentType}
                onValueChange={(e) => setComponentType(e as ComponentType)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selectionner le type de composant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    {Object.values(ComponentType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <ComponentForm
                data={formData}
                setData={setFormData}
              />
              <MetadataForm
                componentType={componentType}
                metadata={metadata}
                setMetadata={setMetadata}
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={editComponent ? () => handleUpdate(editComponent) : handleCreate}>
                  {editComponent ? "Update" : "Create"}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
