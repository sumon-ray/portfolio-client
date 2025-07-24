// import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import '../globals.css';
// FILE: app/dashboard/layout.tsx
// ... (আপনার AppSidebar, SidebarProvider, SidebarTrigger import গুলো) ...

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* এই div টি পুরো ড্যাশবোর্ড লেআউটকে নিয়ন্ত্রণ করে।
        - `flex`: এর চাইল্ডগুলোকে পাশাপাশি রাখে (Sidebar এবং main).
        - `min-h-screen`: পুরো লেআউটটিকে অন্তত পুরো স্ক্রিন উচ্চতা দেয়।
      */}
      <div className="flex min-h-screen">

       
        <main className="flex-1   py-8 px-4">
          <SidebarTrigger /> 
          {children} 
        </main>
      </div>
    </SidebarProvider>
  );
}
