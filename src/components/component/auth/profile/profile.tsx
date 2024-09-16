"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useUserStore from "@/stores/useUserStore";
import useAuthStore from "@/stores/useAuthStore";
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast";


export default function ProfileComponent() {
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "", picture: "", id: "" });
  const [loading, setLoading] = useState(false);
  const { fetchUser, updateUser, deleteUser } = useUserStore() as {
    fetchUser: Function;
    updateUser: Function;
    deleteUser: Function;
  };
  const { user, logout } = useAuthStore() as { user: UserFormData, logout: Function }
  const router = useRouter();
  const { toast } = useToast();

  interface UserFormData {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picture: string;
  }

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const data = await fetchUser(user.id);
      console.log(data.data)
      setUserData(data.data);
    } catch (error) {
      toast({
        title: "Impossible d'effectuer cette action",
        description: 'Réssayer plus tard.',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchProfileData();
  }, [fetchUser]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(userData);
      toast({
        title: "Votre compte utilisateur à été mise à jour",
        description: 'Vos modifications sont à jour.',
      });
      await fetchProfileData()
    } catch (error) {
      toast({
        title: "Impossible d'effectuer cette action",
        description: 'Réssayer plus tard.',
        variant: "destructive",
      });
    }
  };

  const handleDisconnected = async () => {
    try {
      await logout();
      router.push('/')
      toast({
        title: "Bienvenu inconnu",
        description: 'Vous avez été déconnécté avec succés',
        variant: "destructive",
      });
    } catch (error) {
      toast({
        title: "Impossible d'effectuer cette action",
        description: 'Réssayer plus tard.',
        variant: "destructive",
      });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(userData.id);
      await logout();
      router.push('/')
      toast({
        title: "Votre compte utilisateur à été détruit",
        description: 'Réssayer plus tard.',
        variant: "destructive",
      });
    } catch (error) {
      toast({
        title: "Impossible d'effectuer cette action",
        description: 'Réssayer plus tard.',
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-background">
      <div className="">
        <div className="container py-6 md:py-10">
          <div className="grid grid-row gap-6 md:gap-10">
            <nav className="shadow-md rounded-lg border bg-background p-4 md:p-6">
              <ul className="grid grid-cols-4 gap-2">
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveSection("profile")}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <LayoutGridIcon className="h-5 w-5" />
                    Profil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveSection("editProfile")}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <FilePenIcon className="h-5 w-5" />
                    Editer mon profil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveSection("disconnectProfile")}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>                    Se déconnecter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setActiveSection("removeProfile")}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <TrashIcon className="h-7 w-7" />
                    Supprimer mon compte
                  </a>
                </li>
              </ul>
            </nav>

            <div className="grid gap-6 shadow-md">
              {activeSection === "profile" && (
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={"/placeholder-user.jpg"} />
                      <AvatarFallback>{userData.firstName} {userData.lastName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{userData.firstName} {userData.lastName}</div>
                      <div className="text-sm text-muted-foreground">Adresse email: {userData.email}</div>
                    </div>
                  </CardHeader>
                </Card>
              )}

              {activeSection === "editProfile" && (
                <div className="rounded-lg border bg-background p-4 md:p-6">
                  <h3 className="text-lg font-medium">Editer Profil</h3>
                  <form className="mt-4 grid gap-4" onSubmit={handleUpdate}>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={userData.lastName}
                        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={userData.firstName}
                        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                    </div>
                    <div className="flex justify-end gap-2">

                      <Button type="submit" disabled={loading}>
                        Sauvegarder
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {activeSection === "disconnectProfile" && (
                <div className="rounded-lg border bg-background p-4 md:p-6">
                  <h3 className="text-lg font-medium">Se déconnecter de mon compte</h3>
                  <div className="mt-4 grid gap-4">
                    <p>Je souhaite me déconncter de mon compte.</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setActiveSection("profile")}>
                        Non
                      </Button>
                      <Button variant="destructive" onClick={handleDisconnected} disabled={loading}>
                        Se déconnecter
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "removeProfile" && (
                <div className="rounded-lg border bg-background p-4 md:p-6">
                  <h3 className="text-lg font-medium">Supprimer ton compte</h3>
                  <div className="mt-4 grid gap-4">
                    <p>Es-tu certain de bien vouloir supprimer ton compte ?</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setActiveSection("profile")}>
                        Non
                      </Button>
                      <Button variant="destructive" onClick={handleDelete} disabled={loading}>
                        Je souhaite supprimer mon profil
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function FilePenIcon(props: any) {
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
  )
}


function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LayoutGridIcon(props: any) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MessageCircleIcon(props: any) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function TrashIcon(props: any) {
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
  )
}
