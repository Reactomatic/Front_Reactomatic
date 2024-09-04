'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import useConfigurationStore from '@/stores/useConfigurationStore';
import { Configuration } from '@/type';
import { DialogConfirmDelete } from '@/components/component/other/dialog-confirm-delete';

export function ConfigurationList() {
  const router = useRouter();
  const { fetchConfigurations, deleteConfiguration } = useConfigurationStore() as { fetchConfigurations: Function, deleteConfiguration: Function };
  const [dialogDelete, setDialogDelete] = useState<string | null>('');

  const [configurations, setConfigurations] = useState<Configuration[]>([]);

  // Fetch configurations only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const configs = await fetchConfigurations();
      setConfigurations(configs || []); // Set state to avoid re-fetching
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  const handleDelete = async (id: string) => {
    await deleteConfiguration(id);
    setDialogDelete(null);
  }

  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold">Mes Configurations</h1>
      {configurations.map((config, index) => (
        <Card key={index}>
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>{config.name}</div>
            <div className="flex items-center space-x-2">
              <div>{config.price} €</div>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => { setDialogDelete(config.id) }}>
                <DialogConfirmDelete onConfirm={() => handleDelete(config.id)} />
              </Button>
            </div>
          </div>
        </Card>
      ))
      }
      <Button className="w-full rounded-md">Ajouter une configuration</Button>

    </div >
  );
}
