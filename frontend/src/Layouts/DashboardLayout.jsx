import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-secondary flex">
      {/* Sidebar - fixed, 72px wide */}
      <Sidebar />

      {/* Main content area - offset by sidebar width */}
      <div className="flex-1 flex flex-col ml-18">
        {/* Navbar - sticky top */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}