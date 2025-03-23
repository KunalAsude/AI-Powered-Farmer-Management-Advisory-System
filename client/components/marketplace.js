import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, ShoppingCart, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Marketplace() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Marketplace</h2>
          <p className="text-gray-500">Buy and sell agricultural products and equipment</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Tag className="mr-2 h-4 w-4" />
            Sell Item
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search marketplace..." className="w-full pl-8 border-gray-200" />
        </div>
        <Button variant="outline" className="text-gray-600 border-gray-200">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="bg-gray-100">
          <TabsTrigger value="products" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
            Products
          </TabsTrigger>
          <TabsTrigger value="equipment" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
            Equipment
          </TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
            Services
          </TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Organic Tomatoes",
                price: "$3.99/kg",
                seller: "Green Valley Farm",
                image: "/placeholder.svg",
                tags: ["Organic", "Fresh"],
              },
              {
                name: "Premium Wheat Seeds",
                price: "$12.50/kg",
                seller: "AgriTech Solutions",
                image: "/placeholder.svg",
                tags: ["Non-GMO", "High-Yield"],
              },
              {
                name: "Organic Fertilizer",
                price: "$24.99",
                seller: "EcoFarm Supplies",
                image: "/placeholder.svg",
                tags: ["Organic", "5kg Bag"],
              },
              {
                name: "Fresh Corn",
                price: "$2.49/dozen",
                seller: "Sunshine Farms",
                image: "/placeholder.svg",
                tags: ["Fresh", "Local"],
              },
              {
                name: "Pesticide-Free Apples",
                price: "$4.99/kg",
                seller: "Orchard Hills",
                image: "/placeholder.svg",
                tags: ["Pesticide-Free", "Fresh"],
              },
              {
                name: "Soil Enhancer",
                price: "$18.75",
                seller: "Terra Solutions",
                image: "/placeholder.svg",
                tags: ["Organic", "10L"],
              },
              {
                name: "Heirloom Vegetable Seeds",
                price: "$8.99/pack",
                seller: "Heritage Seeds",
                image: "/placeholder.svg",
                tags: ["Heirloom", "Non-GMO"],
              },
              {
                name: "Fresh Honey",
                price: "$15.50/jar",
                seller: "Bee Haven Apiary",
                image: "/placeholder.svg",
                tags: ["Raw", "Organic"],
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
                  <CardDescription className="text-gray-500">{product.seller}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <div className="text-lg font-bold text-gray-800">{product.price}</div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="equipment" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Compact Tractor",
                price: "$12,500",
                seller: "Farm Equipment Co.",
                image: "/placeholder.svg",
                tags: ["Used", "Good Condition"],
              },
              {
                name: "Irrigation System",
                price: "$2,999",
                seller: "WaterTech Solutions",
                image: "/placeholder.svg",
                tags: ["New", "Smart Control"],
              },
              {
                name: "Harvester Attachment",
                price: "$4,750",
                seller: "Harvest Pro",
                image: "/placeholder.svg",
                tags: ["Used", "Refurbished"],
              },
              {
                name: "Drone Sprayer",
                price: "$3,200",
                seller: "AgriDrone Tech",
                image: "/placeholder.svg",
                tags: ["New", "Smart"],
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
                  <CardDescription className="text-gray-500">{product.seller}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <div className="text-lg font-bold text-gray-800">{product.price}</div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="services" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Soil Testing Service",
                price: "$120",
                seller: "AgriLab Analytics",
                image: "/placeholder.svg",
                tags: ["Professional", "Fast Results"],
              },
              {
                name: "Equipment Repair",
                price: "$75/hour",
                seller: "FarmFix Mechanics",
                image: "/placeholder.svg",
                tags: ["On-site", "Experienced"],
              },
              {
                name: "Crop Consulting",
                price: "$200/session",
                seller: "Harvest Advisors",
                image: "/placeholder.svg",
                tags: ["Expert", "Personalized"],
              },
              {
                name: "Drone Field Mapping",
                price: "$350",
                seller: "SkyView Ag",
                image: "/placeholder.svg",
                tags: ["High-Resolution", "Data Analysis"],
              },
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-sm">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
                  <CardDescription className="text-gray-500">{product.seller}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <div className="text-lg font-bold text-gray-800">{product.price}</div>
                  <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

