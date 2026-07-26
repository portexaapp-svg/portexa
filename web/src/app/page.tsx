export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-gray-900">

      <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          Portexa
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#">Features</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-black text-white px-6 py-3">
          Get Started
        </button>
      </nav>

      <section className="max-w-6xl mx-auto text-center pt-24 pb-20 px-8">

        <p className="uppercase tracking-[0.35em] text-blue-600 font-semibold mb-6">
          AI FOR GLOBAL TRADE
        </p>

        <h2 className="text-7xl font-bold leading-tight">
          Import Smarter.
          <br />
          Grow Faster.
        </h2>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto mt-8">
          Portexa helps importers find suppliers,
          compare quotations,
          organise shipments,
          and manage trade documents
          with Artificial Intelligence.
        </p>

        <div className="flex justify-center gap-6 mt-12">
          <button className="rounded-full bg-black text-white px-8 py-4 text-lg">
            Start Free
          </button>

          <button className="rounded-full border px-8 py-4 text-lg">
            Watch Demo
          </button>
        </div>

      </section>

    </main>
  );
}