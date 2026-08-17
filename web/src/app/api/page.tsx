"use client";

import { FormEvent, useState } from "react";

export default function SuppliersPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    valid: boolean;
    product?: string;
    quantity?: string;
    country?: string;
    message?: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!query.trim()) {
      setResult({
        valid: false,
        message: "Please tell me what product you want to source.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/suppliers/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Validation failed.");
      }

      setResult(data);
    } catch (error) {
      console.error(error);

      setResult({
        valid: false,
        message: "Portexa AI could not check your request.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Find Suppliers
        </h1>

        <p className="mt-2 text-gray-600">
          Tell Portexa AI what product you want to source.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. shoes, cosmetic bottles, football shoes"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-xl bg-black px-6 py-3 font-medium text-white disabled:opacity-50"
          >
            {loading ? "Checking..." : "Find Suppliers with AI"}
          </button>
        </form>

        {result && (
          <div className="mt-8 rounded-xl bg-white p-6 shadow">
            {result.valid ? (
              <>
                <h2 className="text-xl font-semibold text-green-600">
                  Valid sourcing request
                </h2>

                <p className="mt-3 text-gray-800">
                  Product:{" "}
                  <strong>{result.product || query}</strong>
                </p>

                {result.quantity && (
                  <p className="mt-1 text-gray-600">
                    Quantity: {result.quantity}
                  </p>
                )}

                {result.country && (
                  <p className="mt-1 text-gray-600">
                    Country: {result.country}
                  </p>
                )}

                <button
                  type="button"
                  className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-white"
                >
                  Show Suppliers
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-red-600">
                  Not a sourcing request
                </h2>

                <p className="mt-3 text-gray-600">
                  {result.message ||
                    "Please describe a product you want to source."}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}