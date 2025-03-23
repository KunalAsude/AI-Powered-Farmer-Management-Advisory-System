import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bug, Camera, FileUp, History, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function PestDetection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Pest Detection</h2>
          <p className="text-gray-500">AI-powered pest identification and treatment recommendations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <History className="mr-2 h-4 w-4" />
            View History
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-800">Upload Image for Analysis</CardTitle>
          <CardDescription className="text-gray-500">
            Upload a clear image of the affected plant or pest for identification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture" className="text-gray-700">
                  Upload Picture
                </Label>
                <div className="flex gap-2">
                  <Input id="picture" type="file" className="border-gray-200" />
                  <Button variant="outline" size="icon" className="text-gray-600 border-gray-200">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="description" className="text-gray-700">
                  Description (Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe any symptoms or observations..."
                  className="min-h-[100px] border-gray-200"
                />
              </div>
              <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700">
                <Search className="mr-2 h-4 w-4" />
                Analyze Image
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 p-12 bg-gray-50">
              <FileUp className="h-8 w-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Drag and drop your image here or use the upload button</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-800">Common Pests Library</CardTitle>
          <CardDescription className="text-gray-500">
            Browse common agricultural pests and their treatments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="crops" className="w-full">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="crops" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                Crops
              </TabsTrigger>
              <TabsTrigger value="fruits" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                Fruits
              </TabsTrigger>
              <TabsTrigger
                value="vegetables"
                className="data-[state=active]:bg-white data-[state=active]:text-green-700"
              >
                Vegetables
              </TabsTrigger>
            </TabsList>
            <TabsContent value="crops" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    name: "Aphids",
                    description: "Small sap-sucking insects that can cause stunted growth and leaf curling.",
                    severity: "Medium",
                    treatment: "Neem oil, insecticidal soap, or ladybugs as natural predators.",
                  },
                  {
                    name: "Wheat Rust",
                    description: "Fungal disease causing orange-brown pustules on leaves and stems.",
                    severity: "High",
                    treatment: "Fungicides containing propiconazole or azoxystrobin.",
                  },
                  {
                    name: "Corn Earworm",
                    description: "Caterpillars that feed on corn ears, causing damage to kernels.",
                    severity: "High",
                    treatment: "Bt (Bacillus thuringiensis) sprays or mineral oil application.",
                  },
                ].map((pest, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2">
                        <Bug className="h-5 w-5 text-red-500" />
                        <CardTitle className="text-lg text-gray-800">{pest.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-500">Severity: {pest.severity}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600">{pest.description}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">Recommended Treatment:</p>
                        <p className="text-sm text-gray-600">{pest.treatment}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-green-700 border-green-200 bg-green-50 hover:bg-green-100"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fruits" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    name: "Apple Maggot",
                    description: "Flies that lay eggs in developing fruit, causing dimpling and internal damage.",
                    severity: "High",
                    treatment: "Sticky traps, kaolin clay applications, or targeted insecticides.",
                  },
                  {
                    name: "Powdery Mildew",
                    description: "Fungal disease causing white powdery spots on leaves and fruit.",
                    severity: "Medium",
                    treatment: "Sulfur-based fungicides or potassium bicarbonate sprays.",
                  },
                ].map((pest, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2">
                        <Bug className="h-5 w-5 text-red-500" />
                        <CardTitle className="text-lg text-gray-800">{pest.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-500">Severity: {pest.severity}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600">{pest.description}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">Recommended Treatment:</p>
                        <p className="text-sm text-gray-600">{pest.treatment}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-green-700 border-green-200 bg-green-50 hover:bg-green-100"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="vegetables" className="mt-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  {
                    name: "Tomato Hornworm",
                    description: "Large green caterpillars that feed on tomato leaves and fruit.",
                    severity: "High",
                    treatment: "Hand-picking, Bt sprays, or introducing parasitic wasps.",
                  },
                  {
                    name: "Cabbage Loopers",
                    description: "Caterpillars that create holes in cabbage, broccoli, and related crops.",
                    severity: "Medium",
                    treatment: "Row covers, Bt sprays, or neem oil applications.",
                  },
                ].map((pest, index) => (
                  <Card key={index} className="border-none shadow-sm">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2">
                        <Bug className="h-5 w-5 text-red-500" />
                        <CardTitle className="text-lg text-gray-800">{pest.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-500">Severity: {pest.severity}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600">{pest.description}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700">Recommended Treatment:</p>
                        <p className="text-sm text-gray-600">{pest.treatment}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-green-700 border-green-200 bg-green-50 hover:bg-green-100"
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-800">Recent Detections</CardTitle>
          <CardDescription className="text-gray-500">Your recent pest detection history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "May 20, 2023",
                pest: "Aphids",
                crop: "Wheat",
                status: "Treated",
                severity: "Medium",
              },
              {
                date: "May 15, 2023",
                pest: "Powdery Mildew",
                crop: "Tomatoes",
                status: "Monitoring",
                severity: "Low",
              },
              {
                date: "May 10, 2023",
                pest: "Corn Earworm",
                crop: "Corn",
                status: "Treated",
                severity: "High",
              },
            ].map((detection, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                    <Bug className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {detection.pest} on {detection.crop}
                    </p>
                    <p className="text-sm text-gray-500">{detection.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      detection.severity === "High"
                        ? "bg-red-100 text-red-700"
                        : detection.severity === "Medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {detection.severity}
                  </div>
                  <div className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">
                    {detection.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

