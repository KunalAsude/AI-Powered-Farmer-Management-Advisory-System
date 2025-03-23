"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, X } from "lucide-react"

export function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your farming assistant. How can I help you today?", isUser: false },
  ])

  const toggleAssistant = () => {
    setIsOpen(!isOpen)
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate a response after 2 seconds
      setTimeout(() => {
        setMessages([...messages, { text: "What's the weather forecast for tomorrow?", isUser: true }])

        // Simulate AI response
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "Tomorrow will be partly cloudy with a high of 22°C. There's a 20% chance of light rain in the afternoon.",
              isUser: false,
            },
          ])
          setIsListening(false)
        }, 2000)
      }, 2000)
    }
  }

  return (
    <>
      <Button
        onClick={toggleAssistant}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-green-600 hover:bg-green-700"
        size="icon"
      >
        <Mic className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-lg md:w-96 border-none">
          <CardHeader className="pb-2 bg-green-50 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-green-800">AI Voice Assistant</CardTitle>
              <Button variant="ghost" size="icon" onClick={toggleAssistant} className="text-green-700">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription className="text-green-600">Ask me anything about farming</CardDescription>
          </CardHeader>
          <CardContent className="p-3">
            <div className="h-60 space-y-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      message.isUser ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 rounded-b-lg">
            <Button
              onClick={toggleListening}
              className={`w-full ${isListening ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
            >
              {isListening ? (
                <>
                  <MicOff className="mr-2 h-4 w-4" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="mr-2 h-4 w-4" />
                  Start Speaking
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

