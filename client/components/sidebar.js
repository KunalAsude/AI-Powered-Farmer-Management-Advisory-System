"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BarChart3, Users, ShoppingCart, Cloud, Bug, Settings, HelpCircle, Home, Leaf, Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const menuItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Community", href: "/community", icon: Users },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingCart },
  { name: "Weather Advisory", href: "/weather", icon: Cloud },
  { name: "Pest Detection", href: "/pest-detection", icon: Bug },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col h-full bg-white border-r w-64">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b">
        <div className="relative">
          <Leaf className="h-8 w-8 text-green-500" />
          <motion.div 
            className="absolute inset-0 rounded-full bg-green-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span className="text-xl font-bold text-green-700">FarmAssist AI</span>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              pathname === item.href 
                ? "bg-green-50 text-green-700" 
                : "text-gray-600 hover:bg-green-50 hover:text-green-700"
            )}
          >
            {pathname === item.href ? (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 w-1 h-6 bg-green-600 rounded-r-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            ) : null}
            <item.icon className={cn(
              "h-5 w-5 transition-transform duration-200",
              pathname === item.href ? "text-green-600 scale-110" : "text-gray-500"
            )} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Footer */}
      <div className="px-3 py-4 border-t">
        <div className="flex items-center justify-between mb-2 px-3">
          <span className="text-sm font-medium text-gray-600">Theme</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-8 w-8 rounded-full"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-amber-500" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-700" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
        >
          <Settings className="h-5 w-5 text-gray-500" />
          <span>Settings</span>
        </Link>
        <Link
          href="/help"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200"
        >
          <HelpCircle className="h-5 w-5 text-gray-500" />
          <span>Help & Support</span>
        </Link>
      </div>
    </div>
  );
}
