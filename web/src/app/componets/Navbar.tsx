export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold">
          Portexa
        </h1>

        <div className="hidden md:flex gap-8 text-gray-600">

          <a href="#">Features</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </div>

        <div className="flex gap-4">

          <button className="px-5 py-2">
            Sign In
          </button>

          <button className="bg-black text-white px-5 py-2 rounded-full">
            Start Free
          </button>

        </div>

      </div>
    </nav>
  );
}