export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h1 className="text-6xl font-bold mb-6">
          Portexa
        </h1>

        <p className="text-2xl text-gray-600 max-w-3xl mb-8">
          The AI Workspace for Global Importers
        </p>

        <p className="max-w-2xl text-lg text-gray-500 mb-12">
          Find suppliers, compare quotations, organize shipments,
          manage documents and grow your importing business —
          all powered by Artificial Intelligence.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg">
            Get Started
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-xl text-lg">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}