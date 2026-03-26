import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// Admin Pages
import Dashboard from "@/pages/admin/Dashboard";
import Orders from "@/pages/admin/Orders";
import OrderDetail from "@/pages/admin/OrderDetail";

// User Pages
import MyOrders from "@/pages/user/MyOrder";
import OrderTracking from "@/pages/user/OrderTracking";

// ─── Add new pages here ───────────────────────────────────────────────────────
// import Settings from "@/pages/Settings";
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Redirect root to admin dashboard */}
				<Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

				{/* Admin Routes */}
				<Route path="/admin" element={<DashboardLayout />}>
					<Route index element={<Navigate to="dashboard" replace />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="orders" element={<Orders />} />
					<Route path="order-detail" element={<OrderDetail />} />
					{/* ─── Add new admin pages here ─────────────────────────────────── */}
					{/* <Route path="customers" element={<Customers />} /> */}
				</Route>

				{/* User Routes */}
				<Route path="/user" element={<DashboardLayout />}>
					<Route index element={<Navigate to="my-orders" replace />} />
					<Route path="my-orders" element={<MyOrders />} />
					<Route path="order-tracking" element={<OrderTracking />} />
					{/* ─── Add new user pages here ──────────────────────────────────── */}
				</Route>

				{/* Shared Routes */}
				<Route path="/settings" element={<DashboardLayout />}>
					{/*   <Route index element={<Settings />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
