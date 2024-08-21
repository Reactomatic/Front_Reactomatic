/**
 * v0 by Vercel.
 * @see https://v0.dev/t/O1YYmH8MEzB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ComponentList() {
  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    price: {
      min: 0,
      max: 1000,
    },
  })
  const components = [
    {
      id: 1,
      name: "Processeur Intel Core i7-12700K",
      description: "Processeur haut de gamme avec 12 coeurs et 24 threads",
      price: 349.99,
      type: "Processeur",
      brand: "Intel",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Carte graphique NVIDIA GeForce RTX 3080",
      description: "Carte graphique puissante pour le gaming en 4K",
      price: 699.99,
      type: "Carte graphique",
      brand: "NVIDIA",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Disque SSD Samsung 970 EVO Plus 1 To",
      description: "Disque SSD ultra rapide pour un démarrage et des chargements ultra-rapides",
      price: 149.99,
      type: "Stockage",
      brand: "Samsung",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Mémoire vive Corsair Vengeance LPX 32 Go",
      description: "Mémoire vive haut de gamme avec des performances élevées",
      price: 149.99,
      type: "Mémoire",
      brand: "Corsair",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Carte mère ASUS ROG Strix Z690-E Gaming WIFI",
      description: "Carte mère haut de gamme pour les processeurs Intel de 12e génération",
      price: 399.99,
      type: "Carte mère",
      brand: "ASUS",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Boîtier Corsair 4000D Airflow",
      description: "Boîtier haut de gamme avec un excellent refroidissement",
      price: 119.99,
      type: "Boîtier",
      brand: "Corsair",
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Alimentation Corsair RMx Series RM850x",
      description: "Alimentation modulaire haut de gamme avec une certification 80+ Gold",
      price: 159.99,
      type: "Alimentation",
      brand: "Corsair",
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Refroidisseur liquide NZXT Kraken Z63",
      description: "Refroidisseur liquide AIO avec un écran LCD personnalisable",
      price: 249.99,
      type: "Refroidisseur",
      brand: "NZXT",
      image: "/placeholder.svg",
    },
  ]
  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      if (filters.brand.length > 0 && !filters.brand.includes(component.brand)) {
        return false
      }
      if (filters.type.length > 0 && !filters.type.includes(component.type)) {
        return false
      }
      if (component.price < filters.price.min || component.price > filters.price.max) {
        return false
      }
      return true
    })
  }, [filters])
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === "brand") {
        return {
          ...prevFilters,
          brand: prevFilters.brand.includes(value)
            ? prevFilters.brand.filter((item) => item !== value)
            : [...prevFilters.brand, value],
        }
      } else if (type === "type") {
        return {
          ...prevFilters,
          type: prevFilters.type.includes(value)
            ? prevFilters.type.filter((item) => item !== value)
            : [...prevFilters.type, value],
        }
      } else if (type === "price") {
        return {
          ...prevFilters,
          price: {
            ...prevFilters.price,
            [value.key]: value.value,
          },
        }
      }
      return prevFilters
    })
  }
  const [selectedComponent, setSelectedComponent] = useState(null)
  const handleComponentClick = (component) => {
    setSelectedComponent(component)
  }
  const closeModal = () => {
    setSelectedComponent(null)
  }
  return (
    <div className="grid grid-cols-[240px_1fr] gap-6 p-6">
      <div className="bg-background border rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4">Filtres</h2>
        <div className="grid gap-4">
          <div>
            <h3 className="text-base font-medium mb-2">Marque</h3>
            <div className="grid gap-2">
              {["Intel", "NVIDIA", "Samsung", "Corsair", "ASUS", "NZXT"].map((brand) => (
                <Label key={brand} className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.brand.includes(brand)}
                    onCheckedChange={() => handleFilterChange("brand", brand)}
                  />
                  {brand}
                </Label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Type</h3>
            <div className="grid gap-2">
              {[
                "Processeur",
                "Carte graphique",
                "Stockage",
                "M\u00E9moire",
                "Carte m\u00E8re",
                "Bo\u00EEtier",
                "Alimentation",
                "Refroidisseur",
              ].map((type) => (
                <Label key={type} className="flex items-center gap-2 font-normal">
                  <Checkbox
                    checked={filters.type.includes(type)}
                    onCheckedChange={() => handleFilterChange("type", type)}
                  />
                  {type}
                </Label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-2">Prix</h3>
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <Label htmlFor="min-price" className="flex items-center gap-2">
                  Min
                  <Input
                    id="min-price"
                    type="number"
                    value={filters.price.min}
                    onChange={(e) =>
                      handleFilterChange("price", {
                        key: "min",
                        value: Number(e.target.value),
                      })
                    }
                    className="w-20"
                  />
                </Label>
                <Label htmlFor="max-price" className="flex items-center gap-2">
                  Max
                  <Input
                    id="max-price"
                    type="number"
                    value={filters.price.max}
                    onChange={(e) =>
                      handleFilterChange("price", {
                        key: "max",
                        value: Number(e.target.value),
                      })
                    }
                    className="w-20"
                  />
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredComponents.map((component) => (
          <Card key={component.id} className="relative group" onClick={() => handleComponentClick(component)}>
            <span className="absolute inset-0 z-10 cursor-pointer" />
            <img
              src="/placeholder.svg"
              alt={component.name}
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full aspect-[3/2]"
            />
            <CardContent className="p-4">
              <h3 className="font-medium text-lg">{component.name}</h3>
              <p className="text-sm text-muted-foreground">{component.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-medium text-primary">${component.price.toFixed(2)}</div>
                <Button size="icon" variant="ghost">
                  <PlusIcon className="w-5 h-5" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedComponent && (
        <Dialog open onOpenChange={closeModal}>
          <DialogContent className="bg-background border rounded-lg p-6 max-w-[800px] w-full">
            <div className="grid grid-cols-[1fr_1fr] gap-6">
              <div>
                <img
                  src="/placeholder.svg"
                  alt={selectedComponent.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full aspect-[4/3]"
                />
              </div>
              <div className="grid gap-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedComponent.name}</h2>
                  <p className="text-muted-foreground">{selectedComponent.description}</p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">Price:</span>
                    <span className="text-2xl font-bold text-primary">${selectedComponent.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">Brand:</span>
                    <span>{selectedComponent.brand}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">Type:</span>
                    <span>{selectedComponent.type}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline">Add to Cart</Button>
                  <Button>Compare Prices</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}