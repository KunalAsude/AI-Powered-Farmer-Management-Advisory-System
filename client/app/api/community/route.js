import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get("location")
  const cropType = searchParams.get("cropType")

  try {
    // Mock data - replace with actual database query
    const farmers = [
      {
        id: "1",
        name: "John Doe",
        location: "Maharashtra",
        cropType: "wheat",
        experience: 5
      },
      {
        id: "2",
        name: "Jane Smith",
        location: "Punjab",
        cropType: "rice",
        experience: 8
      }
    ]

    const groups = [
      {
        id: "1",
        name: "Wheat Farmers Group",
        location: "Maharashtra",
        cropType: "wheat",
        members: 15
      },
      {
        id: "2",
        name: "Rice Growers Network",
        location: "Punjab",
        cropType: "rice",
        members: 25
      }
    ]

    // Filter based on query params
    let filteredFarmers = farmers
    let filteredGroups = groups

    if (location) {
      filteredFarmers = filteredFarmers.filter(
        (farmer) => farmer.location.toLowerCase() === location.toLowerCase()
      )
      filteredGroups = filteredGroups.filter(
        (group) => group.location.toLowerCase() === location.toLowerCase()
      )
    }

    if (cropType) {
      filteredFarmers = filteredFarmers.filter(
        (farmer) => farmer.cropType.toLowerCase() === cropType.toLowerCase()
      )
      filteredGroups = filteredGroups.filter(
        (group) =>
          group.cropType.toLowerCase() === cropType.toLowerCase() ||
          group.cropType === "multiple"
      )
    }

    return NextResponse.json({ farmers: filteredFarmers, groups: filteredGroups })
  } catch (error) {
    console.error("Error fetching community data:", error)
    return NextResponse.json(
      { error: "Failed to fetch community data" },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const { location, cropType, issue } = await req.json()

    // Mock response - replace with actual community matching logic
    const matches = {
      farmers: [
        {
          id: "1",
          name: "John Doe",
          experience: 5,
          expertise: "Organic farming, pest control",
          distance: "2.5 km"
        }
      ],
      groups: [
        {
          id: "1",
          name: "Local Organic Farmers",
          members: 25,
          description: "Group focused on organic farming techniques"
        }
      ]
    }

    return NextResponse.json(matches)
  } catch (error) {
    console.error("Error matching community:", error)
    return NextResponse.json(
      { error: "Failed to find matches" },
      { status: 500 }
    )
  }
}
