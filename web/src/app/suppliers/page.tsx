"use client";

import Link from "next/link";
import { useState } from "react";

type Supplier = {
  name: string;
  country: string;
  flag: string;
  description: string;
};

type ValidationResult = {
  valid: boolean;
  product?: string;
  quantity?: string;
  country?: string;
  message?: string;
};

const suppliers: Supplier[] = [
  {
    name: "Global Packaging GmbH",
    country: "Germany",
    flag: "🇩🇪",
    description:
      "Cosmetic packaging manufacturer specializing in bottles, jars and containers.",
  },
  {
    name: "Shenzhen Beauty Pack",
    country: "China",
    flag: "🇨🇳",
    description:
      "OEM and private-label packaging supplier for international brands.",
  },
  {
    name: "Anatolia Cosmetics",
    country: "Turkey",
    flag: "🇹🇷",
    description:
      "Cosmetic manufacturer offering private label and custom production.",
  },
];

export default function SuppliersPage() {
  const [product, setProduct] = useState("");
  const [country, setCountry] = useState("Any country");
  const [supplierType, setSupplierType] = useState("Manufacturer");
  const [budget, setBudget] = useState("Any budget");

  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    setErrorMessage("");
    setSearched(false);

    if (!product.trim()) {
      setErrorMessage("Please enter the product you want to source.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/suppliers/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: product,
        }),
      });

      const result: ValidationResult = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result.message || "Something went wrong while checking your request."
        );
        return;
      }

      if (!result.valid) {
        setErrorMessage(
          result.message ||
            "Please describe a real product you want to source."
        );
        return;
      }

      if (result.product) {
        setProduct(result.product);
      }

      if (result.country) {
        const countryExists = [
          "Germany",
          "China",
          "Turkey",
          "Egypt",
          "India",
          "Italy",
          "United States",
        ].includes(result.country);

        if (countryExists) {
          setCountry(result.country);
        }
      }

      setSearched(true);
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Portexa AI could not check your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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

            {/* Supplier Type */}
            <div>
              <label className="block font-semibold mb-2">
                Supplier Type
              </label>

              <select
                value={supplierType}
                onChange={(e) => setSupplierType(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white"
              >
                <option>Manufacturer</option>
                <option>Wholesaler</option>
                <option>Distributor</option>
                <option>Trading Company</option>
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

          {/* Error */}
          {errorMessage && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4">
              {errorMessage}
            </div>
          )}

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? "🤖 Portexa AI is checking..."
              : "🔍 Find Suppliers with AI"}
          </button>
        </div>

        {/* Results */}
        {searched && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  AI Recommended Suppliers
                </h2>

                <p className="text-gray-500 mt-1">
                  Results for "{product}"
                </p>
              </div>

              <div className="bg-black text-white px-4 py-2 rounded-full text-sm">
                🤖 AI Match
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suppliers.map((supplier) => (
                <div
                  key={supplier.name}
                  className="bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <div className="text-4xl mb-4">🏭</div>

                  <h3 className="text-xl font-bold">
                    {supplier.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {supplier.flag} {supplier.country}
                  </p>

                  <p className="text-gray-600 mt-4">
                    {supplier.description}
                  </p>

                  <div className="mt-5 flex gap-3">
                    <button className="border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-100">
                      View Supplier
                    </button>

                    <Link
                      href={`/rfqs/create?supplier=${encodeURIComponent(
                        supplier.name
                      )}&country=${encodeURIComponent(
                        supplier.country
                      )}`}
                      className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 inline-block"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}