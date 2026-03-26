export default function Dashboard() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{[
					{ label: "Total Orders Today", value: "48", color: "bg-sky-500" },
					{ label: "In Progress", value: "12", color: "bg-amber-400" },
					{ label: "Completed", value: "36", color: "bg-emerald-500" },
				].map((stat) => (
					<div
						key={stat.label}
						className="bg-white rounded-2xl p-5 shadow-sm border border-border"
					>
						<div
							className={`w-10 h-10 rounded-xl ${stat.color} opacity-15 mb-3`}
						/>
						<p className="text-2xl font-bold text-foreground">{stat.value}</p>
						<p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
					</div>
				))}
			</div>

			<div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
				<h2 className="text-base font-semibold text-foreground mb-4">
					Recent Activity
				</h2>
				<p className="text-sm text-muted-foreground">
					Dashboard content goes here. Add your charts, tables, and widgets.
				</p>
			</div>
		</div>
	);
}
