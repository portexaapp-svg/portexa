
"use client";

import { FormEvent, useState } from "react";

type Supplier = {
  id: number;
  name: string;
  country: string;
  category: string;
  rating: number;
  verified: boolean;
};

type ValidationResult = {
  valid: boolean;
  product?: string;
  country?: string;
  quantity?: string;
  message?: string;
};

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Hungary",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
];

const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Harare Footwear Manufacturing",
    country: "Zimbabwe",
    category: "Footwear",
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: "Bulawayo Industrial Supply",
    country: "Zimbabwe",
    category: "Industrial Goods",
    rating: 4.6,
    verified: true,
  },
  {
    id: 3,
    name: "German Export Manufacturing",
    country: "Germany",
    category: "Manufacturing",
    rating: 4.9,
    verified: true,
  },
  {
    id: 4,
    name: "Shanghai Global Footwear",
    country: "China",
    category: "Footwear",
    rating: 4.8,
    verified: true,
  },
  {
    id: 5,
    name: "Istanbul Trade Supply",
    country: "Turkey",
    category: "Wholesale",
    rating: 4.7,
    verified: true,
  },
  {
    id: 6,
    name: "Dubai Global Traders",
    country: "United Arab Emirates",
    category: "General Trading",
    rating: 4.7,
    verified: true,
  },
];

export default function SuppliersPage() {
  const [product, setProduct] = useState("");
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!product.trim()) {
      setResult({
        valid: false,
        message: "Please enter a product you want to source.",
      });
      setValidated(false);
      return;
    }

    setLoading(true);
    setValidated(false);
    setResult(null);

    try {
      const response = await fetch("/api/suppliers/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: product.trim(),
          country,
          quantity: quantity.trim(),
        }),
      });

      const data: ValidationResult = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Validation failed.");
      }

      setResult(data);
      setValidated(data.valid);
    } catch (error) {
      console.error("Supplier validation error:", error);

      setResult({
        valid: false,
        message: "Portexa could not validate your request.",
      });

      setValidated(false);
    } finally {
      setLoading(false);
    }
  }

  const filteredSuppliers = suppliers.filter((supplier) => {
    if (country && supplier.country !== country) {
      return false;
    }

    const search = product.trim().toLowerCase();

    if (!search) {
      return true;
    }

    return (
      supplier.category.toLowerCase().includes(search) ||
      supplier.name.toLowerCase().includes(search)
    );
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Find Suppliers
          </h1>

          <p className="mt-2 text-gray-600">
            Choose what you want to source and where you want your
            supplier to be located.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="product"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Product
              </label>

              <input
                id="product"
                value={product}
                onChange={(event) => setProduct(event.target.value)}
                placeholder="e.g. shoes"
                disabled={loading}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Supplier Country
              </label>

              <select
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                disabled={loading}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
              >
                <option value="">Any country</option>

                {countries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="mb-2 block text-sm font-semibold text-gray-900"
              >
                Quantity
              </label>

              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                placeholder="e.g. 10000"
                disabled={loading}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-xl bg-black px-7 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Checking..." : "Find Suppliers with AI"}
          </button>
        </form>

        {result && (
          <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
            {result.valid ? (
              <>
                <h2 className="text-xl font-bold text-green-600">
                  ✓ Valid sourcing request
                </h2>

                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <strong>Product:</strong>{" "}
                    {result.product || product}
                  </p>

                  <p>
                    <strong>Supplier country:</strong>{" "}
                    {result.country || country || "Any country"}
                  </p>

                  <p>
                    <strong>Quantity:</strong>{" "}
                    {result.quantity || quantity || "Not specified"}
                  </p>
                </div>
              </>
            ) : (
              <div>
                <h2 className="text-xl font-bold text-red-600">
                  Invalid request
                </h2>

                <p className="mt-2 text-gray-600">
                  {result.message ||
                    "Please enter a real product you want to source."}
                </p>
              </div>
            )}
          </section>
        )}

        {validated && (
          <section className="mt-8">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Supplier Matches
              </h2>

              <p className="mt-1 text-gray-600">
                {country
                  ? `Showing suppliers located in ${country}.`
                  : "Showing suppliers from all countries."}
              </p>
            </div>

            {filteredSuppliers.length === 0 ? (
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  No matching suppliers found
                </h3>

                <p className="mt-2 text-gray-600">
                  We do not have supplier records for this product and
                  country yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSuppliers.map((supplier) => (
                  <article
                    key={supplier.id}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {supplier.name}
                      </h3>

                      {supplier.verified && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                          Verified
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-gray-600">
                      {supplier.country}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {supplier.category}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">
                        ★ {supplier.rating}
                      </span>

                      <button
                        type="button"
                        className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
                      >
                        View Supplier
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

