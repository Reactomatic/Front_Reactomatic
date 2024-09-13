import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Layers } from "lucide-react"

export default function AdminSelectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Admin</h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="w-full sm:w-64 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5" />
              User Admin
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">Gérer les utilisateurs</p>
          </CardContent>
          <CardFooter>
            <Link href="/admin/users" passHref className="w-full">
              <Button className="w-full">User Admin</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full sm:w-64 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="h-5 w-5" />
              Component Admin
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">CRUD component</p>
          </CardContent>
          <CardFooter>
            <Link href="/admin/components" passHref className="w-full">
              <Button className="w-full">Component Admin</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
