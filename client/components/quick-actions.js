"use client"

import { useState } from "react"
import { Plus, X, Camera, FileText, CloudUpload, MessageSquare, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export function QuickActions() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const actions = [
    {
      icon: Camera,
      label: "Scan Plant",
      color: "green",
      onClick: () => {
        toast({
          title: "Plant Scanner",
          description: "Opening plant scanner camera...",
        })
        setIsOpen(false)
      },
    },
    {
      icon: FileText,
      label: "New Report",
      color: "blue",
      onClick: () => {
        toast({
          title: "Report Creator",
          description: "Creating a new farm report...",
        })
        setIsOpen(false)
      },
    },
    {
      icon: CloudUpload,
      label: "Upload Data",
      color: "purple",
      onClick: () => {
        toast({
          title: "Data Upload",
          description: "Opening data upload dialog...",
        })
        setIsOpen(false)
      },
    },
    {
      icon: MessageSquare,
      label: "Ask AI",
      color: "amber",
      onClick: () => {
        toast({
          title: "AI Assistant",
          description: "Opening AI chat assistant...",
        })
        setIsOpen(false)
      },
    },
    {
      icon: Leaf,
      label: "New Crop",
      color: "emerald",
      onClick: () => {
        toast({
          title: "Crop Manager",
          description: "Opening new crop wizard...",
        })
        setIsOpen(false)
      },
    },
  ]

  return (
    <div className="fixed bottom-4 right-20 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-100 p-2 flex flex-col gap-2 w-[180px]"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:bg-gray-50"
                  onClick={action.onClick}
                >
                  <action.icon className={`mr-2 h-4 w-4 text-${action.color}-500`} />
                  <span className="text-sm">{action.label}</span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={`h-12 w-12 rounded-full shadow-lg transition-all duration-300 ${
                isOpen ? "bg-gray-700 hover:bg-gray-800 rotate-45" : "bg-sky-600 hover:bg-sky-700"
              }`}
              size="icon"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isOpen ? "Close menu" : "Quick actions"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

