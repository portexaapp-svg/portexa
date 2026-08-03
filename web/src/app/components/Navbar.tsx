export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="text-3xl font-extrabold">
          🚢 Portexa
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Dashboard</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 transition">
          Start Free
        </button>

      </div>
    </nav>
  );
}