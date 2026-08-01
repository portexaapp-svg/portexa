export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Portexa
        </h1>

        <div className="flex gap-8">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="/dashboard">Dashboard</a>
        </div>

      </div>
    </nav>
  );
}