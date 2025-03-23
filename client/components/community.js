import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Share2, Filter } from "lucide-react"

export function Community() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">Community Forum</h2>
          <p className="text-gray-500">Connect with other farmers and share your experiences</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="trending" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="bg-gray-100">
                <TabsTrigger
                  value="trending"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-700"
                >
                  Trending
                </TabsTrigger>
                <TabsTrigger value="recent" className="data-[state=active]:bg-white data-[state=active]:text-green-700">
                  Recent
                </TabsTrigger>
                <TabsTrigger
                  value="following"
                  className="data-[state=active]:bg-white data-[state=active]:text-green-700"
                >
                  Following
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="text-gray-600 border-gray-200">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <TabsContent value="trending" className="space-y-4 mt-4">
              {[
                {
                  title: "Best practices for organic tomato farming?",
                  author: "Sarah Johnson",
                  avatar: "/placeholder.svg",
                  content:
                    "I'm looking to transition to organic tomato farming. What are some best practices and challenges I should be aware of?",
                  likes: 24,
                  comments: 8,
                  time: "2 hours ago",
                },
                {
                  title: "Dealing with wheat rust this season",
                  author: "Michael Chen",
                  avatar: "/placeholder.svg",
                  content:
                    "I've noticed early signs of wheat rust in my fields. Has anyone had success with natural remedies or should I go straight to fungicides?",
                  likes: 18,
                  comments: 12,
                  time: "5 hours ago",
                },
                {
                  title: "Water conservation techniques for corn",
                  author: "David Williams",
                  avatar: "/placeholder.svg",
                  content:
                    "With the dry season approaching, I'm looking for effective water conservation techniques for my corn fields. Any suggestions?",
                  likes: 32,
                  comments: 15,
                  time: "1 day ago",
                },
              ].map((post, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback className="bg-sky-100 text-sky-700">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-gray-800">{post.title}</CardTitle>
                        <CardDescription className="text-gray-500">
                          Posted by {post.author} • {post.time}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{post.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {post.comments}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="recent" className="space-y-4 mt-4">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardDescription className="text-gray-500">More posts will appear here</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="following" className="space-y-4 mt-4">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardDescription className="text-gray-500">
                    Posts from farmers you follow will appear here
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-4">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-800">Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {["Organic Farming", "Pest Control", "Irrigation", "Crop Rotation", "Soil Health"].map(
                  (topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">#{topic}</span>
                      <span className="text-xs text-gray-500">{Math.floor(Math.random() * 100) + 10} posts</span>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-800">Active Farmers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Sarah Johnson", "Michael Chen", "David Williams", "Emma Garcia", "Robert Kim"].map(
                  (farmer, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt={farmer} />
                        <AvatarFallback className="bg-sky-100 text-sky-700">
                          {farmer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">{farmer}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-green-700 border-green-200 bg-green-50 hover:bg-green-100"
                      >
                        Follow
                      </Button>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

