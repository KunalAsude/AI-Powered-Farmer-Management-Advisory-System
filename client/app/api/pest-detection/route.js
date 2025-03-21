import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const formData = await req.formData()
    const image = formData.get("image")

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      )
    }

    // Mock response - replace with actual AI analysis
    const analysis = {
      detection: {
        pest: "Aphids",
        disease: "Leaf Rust",
        confidence: 0.89
      },
      recommendations: [
        {
          type: "Organic",
          solution: "Neem oil spray",
          instructions: "Mix 2-3ml neem oil per liter of water and spray weekly"
        },
        {
          type: "Chemical",
          solution: "Fungicide treatment",
          instructions: "Apply copper-based fungicide as per package instructions"
        }
      ]
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Error analyzing image:", error)
    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    )
  }
}
