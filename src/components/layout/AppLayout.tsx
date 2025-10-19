import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-card flex items-center px-6 sticky top-0 z-10 shadow-soft">
          <SidebarTrigger className="mr-4" />
          <h1 className="text-lg font-semibold text-foreground">
            Escola Secundária Samora Moisés Machado
          </h1>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
