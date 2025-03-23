"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, HelpCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"

export function CropHealthCard() {
  const [selectedCrop, setSelectedCrop] = useState("wheat")

  const crops = {
    wheat: {
      health: 85,
      status: "Good",
      issues: ["Minor aphid presence", "Optimal growth"],
      color: "green",
      icon: CheckCircle,
    },
    corn: {
      health: 65,
      status: "Fair",
      issues: ["Water stress detected", "Nutrient deficiency"],
      color: "amber",
      icon: HelpCircle,
    },
    tomatoes: {
      health: 45,
      status: "Poor",
      issues: ["Pest infestation", "Leaf blight detected"],
      color: "red",
      icon: AlertTriangle,
    },
  }

  const activeCrop = crops[selectedCrop]

  return (
    <div className="flex flex-col">
      <div className="flex border-b">
        {Object.keys(crops).map((crop) => (
          <button
            key={crop}
            onClick={() => setSelectedCrop(crop)}
            className={`flex-1 py-2 text-sm font-medium capitalize transition-colors duration-300 ${
              selectedCrop === crop ? "text-green-700 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {crop}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCrop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full bg-${activeCrop.color}-50 flex items-center justify-center`}>
                <activeCrop.icon className={`h-5 w-5 text-${activeCrop.color}-600`} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800 capitalize">{selectedCrop}</h3>
                <p className={`text-xs text-${activeCrop.color}-600`}>{activeCrop.status}</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800">{activeCrop.health}%</div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500">Health Score</span>
              <span className="text-xs font-medium text-gray-700">{activeCrop.health}%</span>
            </div>
            <Progress value={activeCrop.health} className="h-2" indicatorClassName={`bg-${activeCrop.color}-500`} />
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-medium text-gray-700">Issues & Notes</h4>
            {activeCrop.issues.map((issue, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full bg-${activeCrop.color}-500`} />
                <span className="text-xs text-gray-600">{issue}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

