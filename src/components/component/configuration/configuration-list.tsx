import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import useConfigurationStore from '@/stores/useConfigurationStore';
import { DialogConfirmDelete } from '@/components/component/other/dialog-confirm-delete';
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton"; // Composant Skeleton à ajouter

interface ConfigurationListProps {
  onConfigSelect: (id: string) => void;
}

export function ConfigurationList({ onConfigSelect }: ConfigurationListProps) {
  const { fetchConfigurationsUser, deleteConfiguration, createConfiguration } = useConfigurationStore() as { fetchConfigurationsUser: Function, deleteConfiguration: Function, createConfiguration: Function };
  const [dialogDelete, setDialogDelete] = useState<string | null>('');
  const [configurations, setConfigurations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true); // Début du chargement
    try {
      const configs = await fetchConfigurationsUser();
      if (configs.status === 200) {
        setConfigurations(configs.data || []); // Set state to avoid re-fetching
      } else {
        toast({
          title: "Erreur lors de la récupérationd e vos configuration",
          description: "",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Gestion d'erreur
    } finally {
      setLoading(false); // Fin du chargement
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await deleteConfiguration(id);
    if (result.status === 200) {
      fetchData()
      toast({
        title: "Configuration supprimé !",
        description: "Elle a maintenant disparu !",
      });

    } else if (result.status === 400) {
      toast({
        title: "Erreur dans la suppretion",
        description: result.message,
        variant: "destructive",
      });
    } else if (result.status === 401) {
      toast({
        title: "Tu ne peux pas créer de configuration!",
        description: result.message,
        variant: "destructive",
      });
    }
    setDialogDelete(null);
  }

  const handleCreate = async () => {
    const result = await createConfiguration("Ma configuration", []);

    if (result.status === 201) {
      const newConfig = result.data;
      setConfigurations((prevConfigs) => [...prevConfigs, newConfig]);

      toast({
        title: "Configuration commencée !",
        description: "Bon courage dans ta quête du PC parfait !",
      });
    } else if (result.status === 400) {
      toast({
        title: "Erreur dans la création",
        description: result.message,
        variant: "destructive",
      });
    } else if (result.status === 401) {
      toast({
        title: "Tu ne peux pas créer de configuration!",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold">Mes Configurations</h1>
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-16 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <>
          {configurations.map((config, index) => (
            <Card key={index} >
              <div className="flex items-center space-x-2 px-2 dark:bg-neutral-800 rounded-md dark:border-2 dark:border-neutral-700">
                <CardContent className="flex items-center w-full justify-between p-4 rounded-md" onClick={() => onConfigSelect(config.id)}>
                  <div>{config.name}</div>
                </CardContent>
                <Button variant="ghost" size="icon" className="dark:bg-red-800 dark:hover:bg-red-900 bg-red-600 text-white hover:bg-red-800 hover:text-white">
                  <DialogConfirmDelete onConfirm={() => handleDelete(config.id)} />
                </Button>
              </div>
            </Card>
          ))}
          <Button className="w-full rounded-md" onClick={() => handleCreate()}>Ajouter une configuration</Button>
        </>
      )}
    </div>
  )
}
