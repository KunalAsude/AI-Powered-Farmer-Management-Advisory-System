"use client"

import { useState } from "react"
import { Cloud, CloudRain, Droplets, Sun, Wind } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function WeatherWidget() {
  const [activeDay, setActiveDay] = useState(0)

  const forecast = [
    { day: "Today", temp: "24°C", condition: "Sunny", icon: Sun, color: "amber" },
    { day: "Tomorrow", temp: "22°C", condition: "Partly Cloudy", icon: Cloud, color: "sky" },
    { day: "Wednesday", temp: "20°C", condition: "Cloudy", icon: Cloud, color: "sky" },
    { day: "Thursday", temp: "19°C", condition: "Light Rain", icon: CloudRain, color: "sky" },
    { day: "Friday", temp: "21°C", condition: "Sunny", icon: Sun, color: "amber" },
  ]

  const activeWeather = forecast[activeDay]

  return (
    <div className="flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="p-4 flex flex-col items-center justify-center"
        >
          <activeWeather.icon className={`h-16 w-16 text-${activeWeather.color}-500 mb-2`} />
          <div className="text-2xl font-bold text-gray-800">{activeWeather.temp}</div>
          <div className="text-sm text-gray-500">{activeWeather.condition}</div>

          <div className="grid grid-cols-2 gap-2 w-full mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Wind className="h-4 w-4 text-sky-500" />
              <span>12 km/h</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Droplets className="h-4 w-4 text-sky-500" />
              <span>65%</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="border-t mt-2">
        <div className="flex overflow-x-auto scrollbar-hide">
          {forecast.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-1 min-w-[80px] py-3 flex flex-col items-center justify-center transition-colors duration-300 ${
                activeDay === index ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <day.icon className={`h-5 w-5 text-${day.color}-${activeDay === index ? "600" : "400"} mb-1`} />
              <span className={`text-xs font-medium ${activeDay === index ? "text-gray-800" : "text-gray-500"}`}>
                {day.day}
              </span>
              <span className={`text-xs ${activeDay === index ? "text-gray-600" : "text-gray-400"}`}>{day.temp}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

