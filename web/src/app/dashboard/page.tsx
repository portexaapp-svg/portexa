import Welcome from "../components/Welcome";
import QuickActions from "../components/QuickActions";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Suppliers"
              value="1,284"
              icon="🏭"
            />

            <StatCard
              title="RFQs"
              value="24"
              icon="📄"
            />

            <StatCard
              title="Shipments"
              value="12"
              icon="🚢"
            />

            <StatCard
              title="AI Tasks"
              value="38"
              icon="🤖"
            />

          </div>

        </main>

      </div>

    </div>
  );
}