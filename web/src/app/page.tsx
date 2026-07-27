export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold">Portexa</h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#">Features</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-black text-white px-6 py-3">
          Login
        </button>
      </nav>

      <section className="max-w-6xl mx-auto text-center px-8 pt-20 pb-24">

        <p className="uppercase tracking-[0.35em] text-blue-600 font-semibold mb-6">
          AI WORKSPACE FOR GLOBAL IMPORTERS
        </p>

        <h2 className="text-6xl md:text-7xl font-bold leading-tight">
          Import Smarter.
          <br />
          Grow Faster.
        </h2>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
          Portexa helps importers discover suppliers, compare quotations,
          organise shipments and manage trade documents using AI.
        </p>

        <div className="flex justify-center gap-6 mt-12">
          <button className="rounded-full bg-black text-white px-8 py-4">
            Start Free
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-4">
            Watch Demo
          </button>
        </div>

      </section>

    </main>
  );
}