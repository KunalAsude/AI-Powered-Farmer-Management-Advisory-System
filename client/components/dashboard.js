import {
  Droplets,
  Leaf,
  SproutIcon as Seedling,
  Tractor,
  TrendingUp,
  ArrowRight,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AreaChart } from "@/components/charts"
import { WeatherWidget } from "@/components/weather-widget"
import { CropHealthCard } from "@/components/crop-health-card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Dashboard</h2>
          <p className="text-gray-500">
            Welcome back,! Here&apos;s an overview of your farm.
          </p>

        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Tractor className="mr-2 h-4 w-4" />
            Add New Crop
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Crops</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
              <Seedling className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">12</div>
            <p className="text-xs text-green-600 font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2 from last season
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Crop Health</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
              <Leaf className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">Good</div>
            <Progress value={75} className="mt-2 h-2 bg-gray-100" indicatorClassName="bg-green-500" />
          </CardContent>
        </Card>

        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Yield Forecast</CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">4.2 tons</div>
            <p className="text-xs text-green-600 font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last harvest
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Water Usage</CardTitle>
            <div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center">
              <Droplets className="h-4 w-4 text-sky-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">1,240 L</div>
            <p className="text-xs text-green-600 font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
              -12% from average
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border border-gray-100 shadow-sm col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-gray-800">Farm Performance</CardTitle>
                <CardDescription className="text-gray-500">Crop yield and resource usage over time</CardDescription>
              </div>
              <Tabs defaultValue="yield" className="w-[200px]">
                <TabsList className="grid w-full grid-cols-2 h-8">
                  <TabsTrigger value="yield" className="text-xs">
                    Yield
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="text-xs">
                    Resources
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] w-full">
              <AreaChart />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-800">Weather</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-green-700">
                <span className="text-xs">Details</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <WeatherWidget />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-gray-800">Crop Calendar</CardTitle>
                <CardDescription className="text-gray-500">Your upcoming farming activities</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View all tasks</DropdownMenuItem>
                  <DropdownMenuItem>Add new task</DropdownMenuItem>
                  <DropdownMenuItem>Export calendar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[220px] pr-4">
              <div className="space-y-4">
                {[
                  { date: "Today", task: "Irrigation - Wheat Field", icon: Droplets, color: "sky" },
                  { date: "Tomorrow", task: "Fertilizer Application - Corn", icon: Seedling, color: "green" },
                  { date: "May 25", task: "Pest Inspection - All Fields", icon: Leaf, color: "green" },
                  { date: "May 28", task: "Harvest - Tomatoes", icon: Tractor, color: "amber" },
                  { date: "June 2", task: "Soil Testing - New Plot", icon: Leaf, color: "green" },
                  { date: "June 5", task: "Equipment Maintenance", icon: Tractor, color: "amber" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-${item.color}-50`}>
                      <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium leading-none text-gray-800">{item.task}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-gray-600 border-gray-200">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-center">
            <Button variant="ghost" className="text-green-700 gap-1 text-sm">
              View Full Calendar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-3 border border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-800">Crop Health</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-green-700">
                <span className="text-xs">Details</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <CropHealthCard />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}