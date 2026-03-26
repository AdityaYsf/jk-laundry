export default function MyOrders() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="text-base font-semibold text-foreground mb-4">My Orders</h2>
      <p className="text-sm text-muted-foreground">
        User's order history goes here. Show order cards with status badges.
      </p>
    </div>
  );
}