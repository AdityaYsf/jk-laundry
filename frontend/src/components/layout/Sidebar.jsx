import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  WashingMachine,
  ClipboardList,
  Settings,
  LogOut,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    label: "Orders",
    icon: ClipboardList,
    path: "/admin/orders",
  },
  {
    label: "Order Detail",
    icon: ShoppingBag,
    path: "/admin/order-detail",
  },
];

const userNavItems = [
  {
    label: "My Orders",
    icon: WashingMachine,
    path: "/user/my-orders",
  },
  {
    label: "Order Tracking",
    icon: Waves,
    path: "/user/order-tracking",
  },
];

const bottomNavItems = [
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
		<aside className="flex flex-col h-full w-18 bg-white border-r border-border shadow-sm py-5 items-center gap-2 fixed left-0 top-0 z-40">
			{/* Logo */}
			<div className="mb-6 flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500 shadow-md shadow-sky-200">
				<WashingMachine className="text-white" size={20} />
			</div>

			{/* Divider */}
			<div className="w-8 h-px bg-border mb-2" />

			{/* Admin Nav */}
			{isAdmin ? (
				<nav className="flex flex-col gap-1 w-full items-center px-2">
					{adminNavItems.map((item) => (
						<SidebarItem key={item.path} item={item} />
					))}
				</nav>
			) : (
				<nav className="flex flex-col gap-1 w-full items-center px-2">
					{userNavItems.map((item) => (
						<SidebarItem key={item.path} item={item} />
					))}
				</nav>
			)}

			{/* Spacer */}
			<div className="flex-1" />

			{/* Divider */}
			<div className="w-8 h-px bg-border mb-2" />

			{/* Bottom Nav */}
			<nav className="flex flex-col gap-1 w-full items-center px-2">
				{bottomNavItems.map((item) => (
					<SidebarItem key={item.path} item={item} />
				))}
				<button
					className="w-full flex items-center justify-center p-2.5 rounded-xl text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors duration-200 group"
					title="Logout"
				>
					<LogOut size={20} />
				</button>
			</nav>
		</aside>
	);
}

function SidebarItem({ item }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.path}
      title={item.label}
      className={({ isActive }) =>
        cn(
          "w-full flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 group relative",
          isActive
            ? "bg-sky-500 text-white shadow-md shadow-sky-200"
            : "text-muted-foreground hover:bg-sky-50 hover:text-sky-500"
        )
      }
    >
      <Icon size={20} />
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-2.5 py-1 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg z-50">
        {item.label}
      </span>
    </NavLink>
  );
}