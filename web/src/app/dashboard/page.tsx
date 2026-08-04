export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🚢 Portexa Dashboard</h1>

        <div className="flex items-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-full">
            AI Assistant
          </button>

          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </header>

      {/* Dashboard Cards */}
      <section className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">🏭 Suppliers</h2>
            <p className="text-4xl mt-4 font-bold">1,284</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">📄 RFQs</h2>
            <p className="text-4xl mt-4 font-bold">24</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">🚢 Shipments</h2>
            <p className="text-4xl mt-4 font-bold">12</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold">🤖 AI Tasks</h2>
            <p className="text-4xl mt-4 font-bold">38</p>
          </div>

        </div>
      </section>

    </main>
  );
}