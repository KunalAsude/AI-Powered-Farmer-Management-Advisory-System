import { NextResponse } from "next/server"

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const location = searchParams.get("location")
  const cropType = searchParams.get("cropType")

  try {
    // Mock data - replace with actual database query
    let listings = [
      {
        id: "1",
        farmer: "John Doe",
        crop: "Wheat",
        quantity: "500 kg",
        location: "Maharashtra",
        expectedTrade: "Rice",
        postedDate: "2024-03-20"
      },
      {
        id: "2",
        farmer: "Jane Smith",
        crop: "Rice",
        quantity: "400 kg",
        location: "Punjab",
        expectedTrade: "Wheat",
        postedDate: "2024-03-19"
      }
    ]

    let filteredListings = listings

    if (location) {
      filteredListings = filteredListings.filter(
        (listing) => listing.location.toLowerCase() === location.toLowerCase()
      )
    }

    if (cropType && cropType !== "all") {
      filteredListings = filteredListings.filter((listing) =>
        listing.crop.toLowerCase().includes(cropType.toLowerCase())
      )
    }

    return NextResponse.json({ listings: filteredListings })
  } catch (error) {
    console.error("Error fetching crop listings:", error)
    return NextResponse.json(
      { error: "Failed to fetch crop listings" },
      { status: 500 }
    )
  }
}

export async function POST(req) {
  try {
    const listing = await req.json()

    // Mock response - replace with actual database insertion
    const newListing = {
      id: Date.now().toString(),
      ...listing,
      postedDate: new Date().toISOString().split("T")[0]
    }

    return NextResponse.json(newListing)
  } catch (error) {
    console.error("Error creating listing:", error)
    return NextResponse.json(
      { error: "Failed to create listing" },
      { status: 500 }
    )
  }
}
