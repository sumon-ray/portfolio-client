"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, SquareTerminal, Bot, ShoppingCart, User, Star, Presentation, BookImage } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"


export type TNavItem = {
  title: string
  url: string
  icon: React.ReactNode
  items?: { title: string; url: string }[]
}

export const NavItems: TNavItem[] = [
  {
    title: "Home",
    url: "/admin/dashboard",
    icon: <SquareTerminal className="w-5 h-5" />,
  },
  {
    title: "Events Management",
    url: "/admin/products",
    icon: <BookImage className="w-5 h-5" />,
    items: [
      { title: "Add Event", url: "/admin/products/add-event" },
      { title: "Event List", url: "/admin/products/event-list" },
    ],
  },
  {
    title: "Payments Management",
    url: "/admin/manage-payments",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    title: "Invites Management",
    url: "/admin/manage-invites",
    icon: <Presentation className="w-5 h-5" />,
    items: [
      { title: "My All Invitaions", url: "/admin/manage-invites/all-invites" },
      { title: "Sent Invitaions", url: "/admin/manage-invites/sent-invites" },
    ],
  },
  {
    title: "User ",
    url: "/admin/user",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Review",
    url: "/admin/review",
    icon: <Star className="w-5 h-5" />,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleSubMenu = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    )
  }

  const isActive = (url: string) => {
    return pathname === url || pathname?.startsWith(url + "/")
  }

  return (
    <Sidebar className="bg-gradient-to-b from-[#E0F7FA] via-[#B3E5FC] to-[#E0F7FA] border-r text-gray-800">
      <SidebarHeader className="p-0 bg-[#1E3A8A]">
        <div className="p-4">
          <div className="flex items-center gap-3 px-2">
            <Avatar className="h-16 w-16 border-2 border-[#3b82f6]">
              <Image width={2000} height={2000} src="/placeholder.svg?height=40&width=40" alt="Profile" />
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-white">Z Zayed Iqbal</span>
              <div className="flex items-center text-xs text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 mr-1.5"></span>
                Online
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#29B6F6] text-white text-xs uppercase py-4 px-4 pl-7 font-medium">General</div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2 space-y-4 md:mt-4">
        {NavItems.map((item) => (
          <div key={item.title} className="mb-1">
            {item.items ? (
              <>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <button
                      onClick={() => toggleSubMenu(item.title)}
                      className={`flex items-center w-full gap-3 px-4 py-3 rounded-md text-sm font-medium ${
                        isActive(item.url)
                          ? "bg-[#1E3A8A] text-white"
                          : "hover:bg-[#1E3A8A] hover:text-white text-gray-700"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center p-1 rounded-md ${
                          isActive(item.url) ? "bg-[#3b82f6] text-white" : "bg-[#1E3A8A] text-gray-300"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold">{item.title}</span>
                      <ChevronDown
                        className={`ml-auto h-4 w-4 transition-transform ${
                          openItems.includes(item.title) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </SidebarMenuItem>
                </SidebarMenu>
                {openItems.includes(item.title) && (
                  <div className="mt-1 ml-12 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.url}
                        className={`block p-4 text-sm font-medium rounded-md transition-colors ${
                          isActive(subItem.url)
                            ? "bg-[#1E3A8A] text-white"
                            : "text-gray-600 hover:bg-[#1E3A8A] hover:text-white"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3  rounded-md text-sm px-4 py-6 font-medium transition-colors ${
                        isActive(item.url)
                          ? "bg-[#1E3A8A]  text-white"
                          : "text-gray-700 hover:bg-[#1E3A8A] hover:text-white"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-6 h-6 rounded-md ${
                          isActive(item.url) ? "bg-[#3b82f6] text-white" : "bg-[#1E3A8A] text-gray-300"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            )}
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto border-t">
        <div className="text-xs leading-tight text-center text-gray-600">
          <p className="font-semibold text-sm text-[#1E3A8A]">NextEvent Admin v1.0</p>
          <p className="mt-1">© 2025 All Rights Reserved</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
