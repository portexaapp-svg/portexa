import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        🚢 Portexa
      </h1>

      <nav className="flex flex-col gap-5 text-lg">

        <Link href="/dashboard">📊 Dashboard</Link>

        <Link href="/suppliers">🏭 Suppliers</Link>

        <Link href="/rfqs">📄 RFQs</Link>

        <Link href="/shipments">🚢 Shipments</Link>

        <Link href="/documents">📁 Documents</Link>

        <Link href="/settings">⚙️ Settings</Link>

      </nav>

    </aside>
  );
}