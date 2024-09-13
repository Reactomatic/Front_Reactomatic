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
});

export function ResetPassword() {
  const { forgotPassword } = useAuthStore() as { forgotPassword: Function };
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  interface LoginFormData {
    email: string;
  }

  async function onSubmit(data: LoginFormData) {
    const result = await forgotPassword(data.email);

    if (result.status === 201) {
      toast({
        title: "Un mail à été envoyé à l'addresse suivante " + data.email + " !",
        description: "Il ne te reste plus qu'à changer ton mot de passe.",
      });

      router.push('/')
    } else {
      toast({
        title: "Un erreur est survenu",
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
            Réinitialiser son mot de passe
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{" "}
            <Link href="/login" className="font-medium text-primary hover:text-primary/90" prefetch={false}>
              se connecter
            </Link>
          </p>
        </div>
        <Card>
          <CardContent className="space-y-6 px-6 py-8">
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="email" placeholder="john.doe@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Réinitialiser
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
