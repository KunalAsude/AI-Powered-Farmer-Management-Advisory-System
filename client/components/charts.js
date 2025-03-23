"use client"

import { useTheme } from "next-themes"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

export function AreaChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDark ? "#e5e7eb" : "#4b5563",
          font: {
            family: "Inter, sans-serif",
            size: 12,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#e5e7eb" : "#111827",
        bodyColor: isDark ? "#d1d5db" : "#4b5563",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: {
            family: "Inter, sans-serif",
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: {
            family: "Inter, sans-serif",
            size: 11,
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 2,
        hoverRadius: 4,
      },
    },
  }

  const data = {
    labels: months,
    datasets: [
      {
        label: "Wheat",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        fill: true,
      },
      {
        label: "Corn",
        data: [45, 55, 65, 60, 70, 65, 75, 80, 85],
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        fill: true,
      },
    ],
  }

  return <Line options={options} data={data} />
}

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDark ? "#e5e7eb" : "#4b5563",
          font: {
            family: "Inter, sans-serif",
            size: 12,
          },
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: isDark ? "#1f2937" : "#ffffff",
        titleColor: isDark ? "#e5e7eb" : "#111827",
        bodyColor: isDark ? "#d1d5db" : "#4b5563",
        borderColor: isDark ? "#374151" : "#e5e7eb",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: {
            family: "Inter, sans-serif",
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: isDark ? "#374151" : "#f3f4f6",
        },
        ticks: {
          color: isDark ? "#9ca3af" : "#6b7280",
          font: {
            family: "Inter, sans-serif",
            size: 11,
          },
        },
      },
    },
  }

  const data = {
    labels: ["Water", "Fertilizer", "Pesticides", "Labor", "Equipment"],
    datasets: [
      {
        label: "This Year",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "#10b981",
      },
      {
        label: "Last Year",
        data: [45, 70, 60, 70, 60],
        backgroundColor: "#0ea5e9",
      },
    ],
  }

  return <Bar options={options} data={data} />
}