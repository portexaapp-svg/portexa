import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          Portexa
        </h1>

        <h2 className="text-3xl font-semibold text-gray-700 mb-8">
          AI Workspace for Global Importers
        </h2>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Find suppliers, compare quotations, organise shipments,
          manage trade documents and automate importing with Artificial Intelligence.
        </p>

       <div className="flex justify-center gap-6 mt-12">
  <a
    href="/dashboard"
    className="bg-black text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition inline-block"
  >
    Start Free
  </a>

  <button className="border border-gray-300 px-8 py-4 rounded-full text-lg">
    Watch Demo
  </button>
</div>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-3">Supplier AI</h3>
            <p className="text-gray-600">
              Discover verified manufacturers worldwide.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">Quotation AI</h3>
            <p className="text-gray-600">
              Compare supplier quotations instantly.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">🚢</div>
            <h3 className="text-2xl font-bold mb-3">Shipment AI</h3>
            <p className="text-gray-600">
              Track every shipment from one dashboard.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-bold mb-3">Document AI</h3>
            <p className="text-gray-600">
              Manage invoices and customs documents.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}