import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get("location")

  if (!location) {
    return NextResponse.json(
      { error: "Location is required" },
      { status: 400 }
    )
  }

  // Mock weather data - replace with actual API call
  const weatherData = {
    location,
    current: {
      temperature: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      wind: "12 km/h",
      minTemp: 22,
      maxTemp: 31,
      precipitation: "20%"
    },
    forecast: [
      {
        day: "Today",
        condition: "Partly Cloudy",
        high: 31,
        low: 22
      },
      {
        day: "Tomorrow",
        condition: "Sunny",
        high: 33,
        low: 23
      }
    ],
    advisory: [
      {
        type: "weather",
        title: "Moderate Rain Expected",
        description: "Plan irrigation accordingly"
      },
      {
        type: "crop",
        title: "Ideal Sowing Conditions",
        description: "Good conditions for wheat sowing in next 5 days"
      }
    ]
  }

  return NextResponse.json(weatherData)
}

export async function POST(req) {
  try {
    const { location, cropType } = await req.json()

    if (!location) {
      return NextResponse.json(
        { error: "Location is required" },
        { status: 400 }
    )
    }

    // Mock recommendations - replace with actual analysis
    const cropRecommendations = {
      location,
      recommendations: [
        {
          crop: "Wheat",
          suitability: "High",
          yield: "Expected 3.5 tons/hectare",
          description: "Ideal temperature and soil conditions"
        },
        {
          crop: "Rice",
          suitability: "Medium",
          yield: "Expected 4 tons/hectare",
          description: "Adequate rainfall expected"
        }
      ],
      soilRecommendations: [
        {
          title: "Soil Preparation",
          description: "Add organic matter to improve soil structure"
        },
        {
          title: "pH Balance",
          description: "Current pH suitable for most crops"
        }
      ]
    }

    return NextResponse.json(cropRecommendations)
  } catch (error) {
    console.error("Error generating crop recommendations:", error)
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    )
  }
}
