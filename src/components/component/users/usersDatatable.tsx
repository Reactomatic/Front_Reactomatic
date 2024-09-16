"use client"

import { useState, useMemo, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import useUserStore from "@/stores/useUserStore"
import { useToast } from "@/components/ui/use-toast"

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  role: string
  isActive: boolean
}

export default function UserDataTable() {
  const [search, setSearch] = useState("")
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'asc' | 'desc' }>({ key: 'id', direction: 'asc' })
  const { fetchUsers, updateUser } = useUserStore()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true) // State to track loading status
  const { toast } = useToast();

  useEffect(() => {
    handleFetchConfig()
  }, [fetchUsers])

  const handleFetchConfig = async () => {
    setLoading(true) // Start loading
    try {
      const result = await fetchUsers();
      if (result.status === 200) {
        const users = result.data;
        setUsers(users)
      } else {
        toast({
          title: "Erreur de chargement",
          description: "Impossible de charger les données. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les données. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false) // Stop loading when data is fetched or on error
    }
  };

  const hadleUpdateState = async (user: User) => {
    const newUser: User = user
    newUser.isActive = !user.isActive
    const result = await updateUser(newUser)

    if (result.status === 200) {
      await handleFetchConfig()
      toast({
        title: "L'utilisateur à été mise a jour !",
        description: "Le statut de l'utilisateur à bien été mise à jour.",
      });
    } else {
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les données. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const handleSort = (key: keyof User) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const filteredAndSortedUsers = useMemo(() => {
    return users
      .filter(user =>
        // Filtrer uniquement les champs qui sont des chaînes de caractères
        ['firstName', 'lastName', 'email', 'role'].some(key =>
          user[key as keyof User].toString().toLowerCase().includes(search.toLowerCase())
        )
      )
      .sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1
        return 0
      })
  }, [users, search, sortConfig])

  if (loading) {
    return (
      <div className="flex justify-center">
        Chargement ...
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Rechercher des utilisateurs..."
        value={search}
        onChange={handleSearch}
        className="max-w-sm"
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {['id', 'firstName', 'lastName', 'email', 'role'].map((key) => (
                <TableHead key={key} className="font-medium">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort(key as keyof User)}
                    className="hover:bg-transparent"
                  >
                    {key === 'firstName' ? 'Prénom' : key === 'lastName' ? 'Nom' : key.charAt(0).toUpperCase() + key.slice(1)}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.isActive ? (
                    <Button className="hover:bg-transparent red" onClick={() => { hadleUpdateState(user) }}>Désactiver</Button>
                  ) : (
                    <Button className="hover:bg-transparent green" onClick={() => { hadleUpdateState(user) }}>Activer</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
