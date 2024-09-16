'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

type ContactRequest = {
  Message: string
  Subject: string
}

const parseContactRequest = (request: ContactRequest) => {
  const nameMatch = request.Message.match(/Bonjour, (.*?) a envoyé/)
  const messageMatch = request.Message.match(/un message de support: (.*?) Vous pouvez/)
  const emailMatch = request.Message.match(/Vous pouvez répondre à (.*)/)

  return {
    name: nameMatch ? nameMatch[1] : 'Unknown',
    message: messageMatch ? messageMatch[1] : 'No message',
    email: emailMatch ? emailMatch[1] : 'No email provided'
  }
}

export default function Component() {
  const [contactRequests, setContactRequests] = useState<ReturnType<typeof parseContactRequest>[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContactRequests = async () => {
      try {
        const response = await fetch('https://n8n.falcatiremi.com/webhook/abb9f731-b10c-4a33-9273-05fcfa189782')
        if (!response.ok) {
          throw new Error('Failed to fetch contact requests')
        }
        const data: ContactRequest[] = await response.json()
        const parsedRequests = data.map(parseContactRequest)
        setContactRequests(parsedRequests)
      } catch (err) {
        setError('An error occurred while fetching contact requests')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContactRequests()
  }, [])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      {contactRequests.length === 0 ? (
        <p>Pas de demande de conact.</p>
      ) : (
        <ScrollArea className="h-[600px] rounded-md border">
          <div className="p-4 grid gap-4">
            {contactRequests.map((request, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{request.name}</CardTitle>
                  <CardDescription>{request.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{request.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
