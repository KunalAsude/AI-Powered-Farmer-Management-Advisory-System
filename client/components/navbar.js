"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, MessageSquare, Search, User, X, Calendar, Tractor, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
// import { useToast } from "@/components/ui/use-toast";

export function Navbar({ children }) {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
//   const { toast } = useToast();
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Weather Alert", message: "Heavy rainfall expected tomorrow", time: "10 min ago", read: false },
    { id: 2, title: "Pest Detection", message: "Possible aphid infestation detected", time: "1 hour ago", read: false },
    { id: 3, title: "Community Update", message: "New post from Sarah Johnson", time: "3 hours ago", read: true },
  ]);
  
  // Handle click outside search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Simulate search results
  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = [
        "Crop rotation techniques",
        "Weather forecast for next week",
        "Organic pest control methods",
        "Irrigation systems comparison",
      ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  const handleSearchFocus = () => {
    setIsSearchOpen(true);
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    // toast({
    //   title: "Notifications marked as read",
    //   description: "All notifications have been marked as read",
    // });
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="border-b bg-white sticky top-0 z-10">
      <div className="flex h-16 items-center px-4 md:px-6">
        {children}
        
        <div className="flex items-center gap-2 relative" ref={searchRef}>
          {!isMobile && (
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-gray-50 border-gray-200 pl-8 md:w-[300px] lg:w-[400px] transition-all duration-300 focus:w-[450px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
              />
              
              <AnimatePresence>
                {isSearchOpen && searchResults.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500">Search Results</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5" onClick={() => setIsSearchOpen(false)}>
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        {searchResults.map((result, index) => (
                          <div 
                            key={index} 
                            className="px-2 py-1.5 hover:bg-gray-50 rounded-md cursor-pointer text-sm text-gray-700 flex items-center gap-2"
                          >
                            <Search className="h-3.5 w-3.5 text-gray-400" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-gray-600">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between px-4 py-2">
                <DropdownMenuLabel className="font-normal">Notifications</DropdownMenuLabel>
                <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-8 text-xs">
                  Mark all as read
                </Button>
              </div>
              <DropdownMenuSeparator />
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="p-0 focus:bg-gray-50">
                  <div className={`w-full px-4 py-3 ${notification.read ? '' : 'bg-green-50'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-2 w-2 rounded-full ${notification.read ? 'bg-transparent' : 'bg-green-500'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-700">{notification.title}</p>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-0 focus:bg-gray-50">
                <Button variant="ghost" className="w-full h-10 text-sm justify-center text-green-600">
                  View all notifications
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Messages</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="py-2 px-4 text-sm text-gray-500">
                No new messages
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
                <Avatar className="h-9 w-9 border-2 border-green-100 transition-all duration-300 hover:border-green-300">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback className="bg-sky-100 text-sky-700">JD</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <User className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                  <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <User className="h-4 w-4 text-gray-500" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>Calendar</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Tractor className="h-4 w-4 text-gray-500" />
                <span>My Farms</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <FileText className="h-4 w-4 text-gray-500" />
                <span>Reports</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600">
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
