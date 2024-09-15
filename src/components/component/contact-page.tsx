'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import useAuthStore from '@/stores/useAuthStore';

export function ContactPageComponent() {
  const { sendSupportEmail } = useAuthStore() as { sendSupportEmail: (lastName: string, firstName: string, email: string, message: string) => Promise<void> }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    try {
      await sendSupportEmail(formData.lastName, formData.firstName, formData.email, formData.message)
      toast({
        title: "Formulaire envoyé",
        description: "Nous vous contacterons bientôt.",
      })
      setFormData({ lastName: '', firstName: '', email: '', message: '' }) // Reset form after successful submission
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-[80dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Contactez-nous
          </h2>
        </div>
        <Card>
          <CardContent className="space-y-6 px-6 py-8 dark:bg-neutral-900 rounded-md dark:border dark:border-neutral-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </form>

          </CardContent>
        </Card>
      </div>
    </div >

  )
}
