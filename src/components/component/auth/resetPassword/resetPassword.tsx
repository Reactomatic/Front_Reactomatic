"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from 'next/navigation';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useAuthStore from "@/stores/useAuthStore";
import Link from "next/link";

// Schema validation using zod
const ResetPasswordSchema = z.object({
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères." }),
});

export function ResetPassword() {
  const { resetPassword } = useAuthStore() as { resetPassword: Function };
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("token"); // Get the reset token from the URL

  const form = useForm({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  interface ResetPasswordFormData {
    password: string;
  }

  async function onSubmit(data: ResetPasswordFormData) {
    if (!resetToken) {
      toast({
        title: "Token manquant",
        description: "Le token de réinitialisation est manquant.",
        variant: "destructive",
      });
      return;
    }

    const result = await resetPassword(data.password, resetToken);

    if (result.status === 200) {
      toast({
        title: "Mot de passe réinitialisé avec succès !",
        description: "Vous pouvez désormais vous connecter avec votre nouveau mot de passe.",
      });

      router.push('/login');
    } else {
      toast({
        title: "Une erreur est survenue",
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nouveau mot de passe</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" placeholder="********" />
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
