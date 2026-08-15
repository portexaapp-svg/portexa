"use client";

import Link from "next/link";
import { useState } from "react";

const suppliers = [
  {
    name: "Global Packaging GmbH",
    country: "Germany",
    flag: "🇩🇪",
    type: "Manufacturer",
    description:
      "Cosmetic packaging manufacturer specializing in bottles, jars and containers.",
  },
  {
    name: "Shenzhen Beauty Pack",
    country: "China",
    flag: "🇨🇳",
    type: "Manufacturer",
    description:
      "OEM and private-label packaging supplier for international brands.",
  },
  {
    name: "Anatolia Cosmetics",
    country: "Turkey",
    flag: "🇹🇷",
    type: "Manufacturer",
    description:
      "Cosmetic manufacturer offering private-label and custom production.",
  },
];

export default function SuppliersPage() {
  const [product, setProduct] = useState("");
  const [country, setCountry] = useState("Any country");
  const [type, setType] = useState("Manufacturer");
  const [budget, setBudget] = useState("Any budget");
  const [searched, setSearched] = useState(false);

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesCountry =
      country === "Any country" || supplier.country === country;

    const matchesType =
      type === "Any type" || supplier.type === type;

    return matchesCountry && matchesType;
  });

  function handleSearch() {
    setSearched(true);
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-8">

          <Link
            href="/dashboard"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="text-4xl font-extrabold mt-4">
            Supplier Finder
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Find manufacturers and suppliers worldwide with Portexa AI.
          </p>

        </div>
      </div>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            What are you looking for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Product */}
            <div>
              <label className="block font-semibold mb-2">
                Product
              </label>

              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="e.g. Cosmetic packaging"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block font-semibold mb-2">
                Supplier Country
              </label>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white"
              >
                <option>Any country</option>
                <option>Germany</option>
                <option>China</option>
                <option>Turkey</option>
                <option>Egypt</option>
                <option>India</option>
                <option>Italy</option>
                <option>United States</option>
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block font-semibold mb-2">
                Supplier Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white"
              >
                <option>Manufacturer</option>
                <option>Wholesaler</option>
                <option>Distributor</option>
                <option>Trading Company</option>
                <option>Any type</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block font-semibold mb-2">
                Estimated Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white"
              >
                <option>Any budget</option>
                <option>Under €5,000</option>
                <option>€5,000 – €20,000</option>
                <option>€20,000 – €50,000</option>
                <option>€50,000+</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleSearch}
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            🔍 Find Suppliers with AI
          </button>

        </div>

        {/* Results */}
        {searched && (
          <div className="mt-10">

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  AI Supplier Recommendations
                </h2>

                <p className="text-gray-500 mt-1">
                  {product
                    ? `Suppliers related to "${product}"`
                    : "Enter a product to improve your search"}
                </p>
              </div>

              <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
                AI Search
              </span>
            </div>

            {filteredSuppliers.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-md p-10 text-center">
                <div className="text-5xl mb-4">🔎</div>

                <h3 className="text-xl font-bold">
                  No matching suppliers yet
                </h3>

                <p className="text-gray-500 mt-2">
                  Try another country or supplier type.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {filteredSuppliers.map((supplier) => (
                  <div
                    key={supplier.name}
                    className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
                  >

                    <div className="text-4xl mb-4">
                      🏭
                    </div>

                    <h3 className="text-xl font-bold">
                      {supplier.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {supplier.flag} {supplier.country}
                    </p>

                    <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm mt-3">
                      {supplier.type}
                    </span>

                    <p className="text-gray-600 mt-4">
                      {supplier.description}
                    </p>

                    <button className="mt-5 w-full border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-100 transition">
                      View Supplier
                    </button>

                  </div>
                ))}

              </div>
            )}

          </div>
        )}

      </section>

    </main>
  );
}