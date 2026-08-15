"use client";

import Link from "next/link";
import { useState } from "react";

export default function RFQPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            Create RFQ
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Create a Request for Quotation and send it to suppliers.
          </p>

        </div>
      </div>

      {/* Form */}
      <section className="max-w-5xl mx-auto px-8 py-10">

        {submitted ? (

          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

            <div className="text-6xl mb-6">
              ✅
            </div>

            <h2 className="text-3xl font-bold">
              RFQ Created Successfully
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Your quotation request has been created and is ready
              to be sent to suppliers.
            </p>

            <div className="flex justify-center gap-4 mt-8">

              <button
                onClick={() => setSubmitted(false)}
                className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100"
              >
                Create Another RFQ
              </button>

              <Link
                href="/dashboard"
                className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
              >
                Go to Dashboard
              </Link>

            </div>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            {/* Product */}
            <h2 className="text-2xl font-bold mb-6">
              Product Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Product Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="e.g. Cosmetic bottles"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Quantity
                </label>

                <input
                  required
                  type="number"
                  placeholder="e.g. 10000"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

            </div>

            {/* Commercial Requirements */}
            <h2 className="text-2xl font-bold mt-10 mb-6">
              Commercial Requirements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Target Price
                </label>

                <input
                  type="text"
                  placeholder="e.g. €0.50 per unit"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Delivery Country
                </label>

                <select className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white">
                  <option>Germany</option>
                  <option>Saudi Arabia</option>
                  <option>Egypt</option>
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Incoterm
                </label>

                <select className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white">
                  <option>EXW</option>
                  <option>FCA</option>
                  <option>FOB</option>
                  <option>CIF</option>
                  <option>DAP</option>
                  <option>DDP</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Required Delivery Date
                </label>

                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none"
                />
              </div>

            </div>

            {/* Additional Requirements */}
            <h2 className="text-2xl font-bold mt-10 mb-6">
              Additional Requirements
            </h2>

            <textarea
              rows={6}
              placeholder="Describe specifications, certifications, packaging requirements, quality standards, private label requirements, etc."
              className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none"
            />

            {/* AI */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">

              <div className="flex items-start gap-4">

                <div className="text-4xl">
                  🤖
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Portexa AI
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Portexa AI will help optimize your RFQ,
                    identify missing information and prepare it
                    for suppliers.
                  </p>
                </div>

              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
            >
              📄 Create RFQ
            </button>

          </form>

        )}

      </section>

    </main>
  );
}