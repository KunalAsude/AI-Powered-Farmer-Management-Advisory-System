import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertTriangle,
  Calendar,
  Cloud,
  CloudRain,
  Droplets,
  Info,
  Leaf,
  SproutIcon as Seedling,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react"

export function WeatherAdvisory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Weather Advisory</h2>
          <p className="text-gray-500">Real-time weather updates and crop recommendations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-sky-600 hover:bg-sky-700">
            <Calendar className="mr-2 h-4 w-4" />
            View Calendar
          </Button>
        </div>
      </div>

      <Alert className="bg-amber-50 border-amber-200 text-amber-800">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-800">Weather Alert</AlertTitle>
        <AlertDescription className="text-amber-700">
          Heavy rainfall expected in the next 48 hours. Consider postponing any planned fertilizer application.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-800">Current Weather</CardTitle>
            <CardDescription className="text-gray-500">Updated as of {new Date().toLocaleTimeString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="flex flex-col items-center">
                <Sun className="h-24 w-24 text-amber-500" />
                <h3 className="mt-2 text-3xl font-bold text-gray-800">24°C</h3>
                <p className="text-gray-500">Sunny</p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:flex-1">
                <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <p className="mt-1 text-xs text-gray-500">Feels Like</p>
                  <p className="font-medium text-gray-800">26°C</p>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                  <Wind className="h-5 w-5 text-sky-500" />
                  <p className="mt-1 text-xs text-gray-500">Wind</p>
                  <p className="font-medium text-gray-800">12 km/h</p>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                  <Droplets className="h-5 w-5 text-sky-500" />
                  <p className="mt-1 text-xs text-gray-500">Humidity</p>
                  <p className="font-medium text-gray-800">65%</p>
                </div>
                <div className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                  <CloudRain className="h-5 w-5 text-sky-500" />
                  <p className="mt-1 text-xs text-gray-500">Precipitation</p>
                  <p className="font-medium text-gray-800">10%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-800">Weekly Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Today", temp: "24°C", condition: "Sunny", icon: Sun, color: "amber" },
                { day: "Tomorrow", temp: "22°C", condition: "Partly Cloudy", icon: Cloud, color: "sky" },
                { day: "Wednesday", temp: "20°C", condition: "Cloudy", icon: Cloud, color: "sky" },
                { day: "Thursday", temp: "19°C", condition: "Light Rain", icon: CloudRain, color: "sky" },
                { day: "Friday", temp: "21°C", condition: "Sunny", icon: Sun, color: "amber" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-${item.color}-50`}>
                      <item.icon className={`h-4 w-4 text-${item.color}-600`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.day}</p>
                      <p className="text-xs text-gray-500">{item.condition}</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-800">{item.temp}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-800">AI Crop Recommendations</CardTitle>
          <CardDescription className="text-gray-500">
            Based on current and forecasted weather conditions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="wheat" className="w-full">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="wheat" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                Wheat
              </TabsTrigger>
              <TabsTrigger value="corn" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                Corn
              </TabsTrigger>
              <TabsTrigger value="tomatoes" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                Tomatoes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="wheat" className="mt-4 space-y-4">
              <Alert className="bg-sky-50 border-sky-200 text-sky-800">
                <Info className="h-4 w-4 text-sky-600" />
                <AlertTitle className="text-sky-800">Optimal Growing Conditions</AlertTitle>
                <AlertDescription className="text-sky-700">
                  Current conditions are favorable for wheat growth. Maintain regular irrigation schedule.
                </AlertDescription>
              </Alert>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-sky-600" />
                    <h4 className="font-medium text-gray-800">Irrigation</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Maintain 2-3 cm water level. Next irrigation recommended in 2 days.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium text-gray-800">Pest Risk</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Low risk of aphids. Monitor for early signs of wheat rust due to humidity.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Seedling className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium text-gray-800">Growth Stage</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Currently in tillering stage. Expected to enter stem extension in 10-14 days.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="corn" className="mt-4">
              <Alert className="bg-sky-50 border-sky-200 text-sky-800">
                <Info className="h-4 w-4 text-sky-600" />
                <AlertTitle className="text-sky-800">Irrigation Alert</AlertTitle>
                <AlertDescription className="text-sky-700">
                  Corn requires additional irrigation due to forecasted dry conditions next week.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="tomatoes" className="mt-4">
              <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Pest Alert</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Increased risk of tomato hornworm due to current temperature and humidity levels.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

