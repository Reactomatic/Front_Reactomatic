"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast"
import useAuthStore from "@/stores/useAuthStore";

// Schema validation using zod
const RegisterSchema = z.object({
  firstName: z.string().min(1, { message: "Un prénom est requis." }),
  lastName: z.string().min(1, { message: "Un nom est requis." }),
  email: z.string().email({ message: "Un email est requis." }),
  password: z.string().min(6, { message: "Le mot de passe fait minimum 6 caractères." }),
  confirmPassword: z.string().min(6, { message: "Vous devez confirmez le mot de passe." }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Les mot de passes ne concorde pas.",
});

export function Register() {
  const { register: registerUser, isAuthenticated } = useAuthStore() as { register: Function, isAuthenticated: boolean };
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  async function onSubmit(data: RegisterFormData) {
    await registerUser(data.email, data.password, data.firstName, data.lastName);
    toast({
      title: "Incription réussi!",
      description: "Vous allez être redirigé.",
    });
  }

  return (
    <div className="flex min-h-[80dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Créer un nouveau compte
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Ou{" "}
            <Link href="/login" className="font-medium text-primary hover:text-primary/90" prefetch={false}>
              se connecter à un compte existant
            </Link>
          </p>
        </div>
        <Card>
          <CardContent className="space-y-6 px-6 py-8">
            <Form {...form}>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="firstName" placeholder="John" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="lastName" placeholder="Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} autoComplete="new-password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmez le mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} autoComplete="new-password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  S'inscrire
                </Button>

              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
