export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-10 py-6 border-b">
        <h1 className="text-3xl font-bold text-blue-600">
          Portexa
        </h1>

        <div className="flex gap-8 text-gray-600">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Sign In
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h2 className="text-6xl font-bold mb-6">
          The AI Workspace
          <br />
          for Global Importers
        </h2>

        <p className="max-w-3xl text-xl text-gray-500 mb-12">
          Find suppliers, compare quotations, organize shipments,
          manage documents and grow your importing business with AI.
        </p>

        <div className="flex gap-5">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
            Get Started
          </button>

          <button className="border px-8 py-4 rounded-xl">
            Book Demo
          </button>
        </div>
      </section>
    </main>
  );
}