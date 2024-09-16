"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useAuthStore from "@/stores/useAuthStore";
import Link from "next/link";

// Schema validation using zod
const LoginSchema = z.object({
  email: z.string().email({ message: "Un email valide est requis." }),
  password: z.string().min(6, { message: "Le mot de passe fait minimum 6 caractères." }),
});

export function Login() {
  const { login } = useAuthStore() as { login: Function };
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  interface LoginFormData {
    email: string;
    password: string;
  }

  async function onSubmit(data: LoginFormData) {
    const result = await login(data.email, data.password);

    if (result.status === 200) {
      toast({
        title: "Un plaisir de te revoir  " + result.data.user.firstName + " !",
        description: "Tu vas être redirigé.",
      });

      router.push('/')
    } else if (result.status === 400) {
      toast({
        title: "Erreur d'inscription",
        description: result.message,
        variant: "destructive",
      });
    } else if (result.status === 401) {
      toast({
        title: "Mot de passe incorrect",
        description: result.message,
        variant: "destructive",
      });
    } else if (result.status === 418) {
      toast({
        title: "Votre compte à été désactivé",
        description: "Contacter le support pour plus d'information",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Erreur d'inscription",
        description: result.message,
        variant: "destructive",
      });
    }
  }


  return (
    <div className="flex min-h-[80dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Se connecter
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{" "}
            <Link href="/register" className="font-medium text-primary hover:text-primary/90" prefetch={false}>
              se créer un nouveau compte
            </Link>
          </p>
        </div>
        <Card>
          <CardContent className="space-y-6 px-6 py-8 dark:bg-neutral-900 rounded-md dark:border dark:border-neutral-700">
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className={"dark:border-neutral-700"} {...field} autoComplete="email" placeholder="john.doe@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Mot de passe</FormLabel>
                        <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                          Mot de passe oublié?
                        </Link>
                      </div>
                      <FormControl>
                        <Input className={"dark:border-neutral-700"} type="password" {...field} autoComplete="current-password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Se connecter
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
