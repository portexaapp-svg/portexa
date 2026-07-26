export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900">

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold">Portexa</h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#" className="hover:text-black">Features</a>
          <a href="#" className="hover:text-black">Solutions</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>

        <button className="rounded-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center px-8 pt-20 pb-24">

        <p className="uppercase tracking-[0.35em] text-blue-600 font-semibold mb-6">
          AI WORKSPACE FOR GLOBAL IMPORTERS
        </p>

        <h2 className="text-6xl md:text-7xl font-bold leading-tight">
          Import Smarter.
          <br />
          Grow Faster.
        </h2>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-9">
          Portexa helps importers discover suppliers, compare quotations,
          organise shipments, manage trade documents and save time using
          Artificial Intelligence.
        </p>

        <div className="flex justify-center gap-6 mt-12">
          <button className="rounded-full bg-black text-white px-8 py-4 text-lg shadow-lg hover:scale-105 transition">
            Start Free
          </button>

          <button className="rounded-full border border-gray-300 bg-white px-8 py-4 text-lg hover:bg-gray-100 transition">
            Watch Demo
          </button>
        </div>

        <div className="mt-10 flex justify-center items-center gap-3 text-gray-500">
          <span className="text-yellow-500 text-2xl">★★★★★</span>
          <span>Trusted by modern global importers</span>
        </div>

      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Supplier AI</h3>
            <p className="text-gray-600">
              Discover verified manufacturers worldwide in seconds.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Quotation AI</h3>
            <p className="text-gray-600">
              Compare supplier quotations automatically.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <div className="text-5xl mb-4">🚢</div>
            <h3 className="text-xl font-bold mb-2">Shipment AI</h3>
            <p className="text-gray-600">
              Track and organise every shipment in one dashboard.
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-8">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-2">Document AI</h3>
            <p className="text-gray-600">
              Manage invoices, packing lists and trade documents.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}