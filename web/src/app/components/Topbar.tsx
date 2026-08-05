export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-xl px-4 py-2 w-72"
        />

        <button className="text-2xl">
          🔔
        </button>

        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold">
          L
        </div>

      </div>

    </header>
  );
}