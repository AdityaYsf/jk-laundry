import { Bell, Search, ChevronDown, WashingMachine } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/admin/dashboard": { title: "Dashboard", subtitle: "Overview of your laundry operations" },
  "/admin/orders": { title: "Orders", subtitle: "Manage all customer orders" },
  "/admin/order-detail": { title: "Order Detail", subtitle: "View and manage order specifics" },
  "/user/my-orders": { title: "My Orders", subtitle: "Track and manage your laundry" },
  "/user/order-tracking": { title: "Order Tracking", subtitle: "Real-time status of your items" },
  "/settings": { title: "Settings", subtitle: "Manage your preferences" },
};

export default function Navbar() {
  const location = useLocation();
  const page = pageTitles[location.pathname] || {
    title: "Laundry System",
    subtitle: "Welcome back",
  };

  return (
		<header className="h-16 bg-white border-b border-border flex items-center px-6 gap-4 sticky top-0 z-30">
			{/* Page Info */}
			<div className="flex-1">
				<p className="text-xs text-muted-foreground font-medium tracking-wide">
					Hi, Admin 👋
				</p>
				<h1 className="text-lg font-semibold text-foreground leading-tight">
					{page.title}
				</h1>
			</div>

			{/* Search Bar */}
			<div className="relative hidden md:flex items-center">
				<Search
					size={15}
					className="absolute left-3 text-muted-foreground pointer-events-none"
				/>
				<input
					type="text"
					placeholder="Search orders, customers..."
					className="pl-9 pr-4 py-2 text-sm bg-secondary rounded-xl border-0 outline-none focus:ring-2 focus:ring-sky-200 text-foreground placeholder:text-muted-foreground w-64 transition-all duration-200"
				/>
			</div>

			{/* Notification Bell */}
			<button className="relative w-9 h-9 flex items-center justify-center rounded-xl hover:bg-secondary transition-colors duration-200 text-muted-foreground hover:text-foreground">
				<Bell size={18} />
				{/* Badge */}
				<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full border-2 border-white" />
			</button>

			{/* Divider */}
			<div className="h-8 w-px bg-border" />

			{/* User Avatar */}
			<button className="flex items-center gap-2.5 hover:bg-secondary rounded-xl px-2 py-1.5 transition-colors duration-200 group">
				<div className="w-8 h-8 rounded-xl bg-linear-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-sm">
					<span className="text-white text-xs font-bold">AD</span>
				</div>
				<div className="hidden md:block text-left">
					<p className="text-sm font-semibold text-foreground leading-none">
						Admin
					</p>
					<p className="text-xs text-muted-foreground mt-0.5">Administrator</p>
				</div>
				<ChevronDown
					size={14}
					className="text-muted-foreground group-hover:text-foreground transition-colors hidden md:block"
				/>
			</button>
		</header>
	);
}