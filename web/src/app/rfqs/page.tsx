"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreateRFQPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-lg w-full">

          <div className="text-6xl mb-6">
            ✅
          </div>

          <h1 className="text-3xl font-bold">
            RFQ Created
          </h1>

          <p className="text-gray-500 mt-4">
            Your RFQ has been created successfully and is ready
            to be sent to suppliers.
          </p>

          <div className="flex justify-center gap-4 mt-8">

            <Link
              href="/rfqs"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              View RFQs
            </Link>

            <button
              onClick={() => setSubmitted(false)}
              className="border border-gray-300 px-6 py-3 rounded-xl"
            >
              Create Another
            </button>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-8 py-8">

          <Link
            href="/rfqs"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to RFQs
          </Link>

          <h1 className="text-4xl font-extrabold mt-4">
            Create RFQ
          </h1>

          <p className="text-gray-500 mt-2">
            Send a professional quotation request to suppliers.
          </p>

        </div>
      </div>

      {/* Form */}
      <section className="max-w-5xl mx-auto px-8 py-10">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >

          {/* Product */}
          <h2 className="text-2xl font-bold mb-6">
            Product Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Product Name
              </label>

              <input
                required
                placeholder="e.g. Cosmetic Bottles"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
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
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

          </div>

          {/* Commercial */}
          <h2 className="text-2xl font-bold mt-10 mb-6">
            Commercial Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-semibold mb-2">
                Target Price
              </label>

              <input
                placeholder="e.g. €0.50 per unit"
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
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
                className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

          </div>

          {/* Requirements */}
          <h2 className="text-2xl font-bold mt-10 mb-6">
            Product Specifications
          </h2>

          <textarea
            rows={6}
            placeholder="Describe specifications, materials, packaging, certifications, quality requirements, private label requirements, etc."
            className="w-full border border-gray-300 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-black"
          />

          {/* AI */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6">

            <div className="flex gap-4">

              <div className="text-4xl">
                🤖
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Portexa AI Optimization
                </h3>

                <p className="text-gray-500 mt-1">
                  Portexa AI will analyze your RFQ and help
                  identify missing information before you send it
                  to suppliers.
                </p>
              </div>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <Link
              href="/rfqs"
              className="border border-gray-300 px-7 py-4 rounded-xl hover:bg-gray-100"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800"
            >
              📄 Create RFQ
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}