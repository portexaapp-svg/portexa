export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">Portexa</h1>

        <div className="flex gap-6">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
}