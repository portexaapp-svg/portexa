import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link href="/" className="text-3xl font-extrabold">
          🚢 Portexa
        </Link>

        <div className="hidden md:flex gap-8 font-medium">

          <Link href="/">Home</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/pricing">Pricing</Link>

          <Link href="/contact">Contact</Link>

        </div>

        <Link
          href="/login"
          className="rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
}