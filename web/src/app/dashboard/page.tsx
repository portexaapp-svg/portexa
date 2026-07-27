export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-10">

        <h1 className="text-5xl font-bold">
          Portexa Dashboard
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome to your AI Import Workspace.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold">🏭 Suppliers</h2>
            <p className="mt-3 text-gray-600">
              Search and manage verified suppliers.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold">🚢 Shipments</h2>
            <p className="mt-3 text-gray-600">
              Track containers and deliveries.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <h2 className="text-2xl font-bold">🤖 AI Assistant</h2>
            <p className="mt-3 text-gray-600">
              Ask AI anything about importing.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}