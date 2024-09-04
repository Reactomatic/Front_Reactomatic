import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { MetadataForm } from "./MetadataForm";
import { Select } from "@/components/ui/select";

export function ComponentCrud() {
  const [data, setData] = useState([
    // Données initiales
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editComponent, setEditComponent] = useState(null);

  const [componentType, setComponentType] = useState("cpu");
  const [metadata, setMetadata] = useState({});
  const [formData, setFormData] = useState({
    id: null,
    category: "cpu",
    name: "",
    price: 0,
    brand: "",
  });

  const handleSort = (column) => {
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCreate = () => {
    const newComponent = {
      id: Math.random(), // Replace with actual unique ID logic
      category: componentType,
      ...formData,
      metadata: Object.entries(metadata).map(([key, value]) => ({ key, value })),
    };
    setData([...data, newComponent]);
    setIsDialogOpen(false);
    resetForm();
  };

  const handleUpdate = (id) => {
    const updatedComponent = data.map((item) =>
      item.id === id ? { ...item, ...formData, metadata: Object.entries(metadata).map(([key, value]) => ({ key, value })) } : item
    );
    setData(updatedComponent);
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const openDialog = (component = null) => {
    setIsDialogOpen(true);
    if (component) {
      setFormData(component);
      setComponentType(component.category);
      setMetadata(component.metadata.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {}));
      setEditComponent(component.id);
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      id: null,
      category: "cpu",
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
        <DialogTrigger />
        <DialogContent>
          <div className="flex flex-col gap-4">
            <Select
              value={componentType}
              onChange={(e) => {
                setComponentType(e.target.value);
                setMetadata({});
              }}
            >
              {Object.keys(componentSchemas).map((type) => (
                <option key={type} value={type}>
                  {componentSchemas[type].name}
                </option>
              ))}
            </Select>

            <Input
              placeholder="Component Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            />
            <Input
              placeholder="Brand"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FilePenIcon(props) {
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

function TrashIcon(props) {
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
