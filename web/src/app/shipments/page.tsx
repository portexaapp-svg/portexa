"use client";

import Link from "next/link";

const shipments = [
  {
    id: "SHP-0001",
    supplier: "Global Packaging GmbH",
    origin: "Hamburg, Germany",
    destination: "Langenfeld, Germany",
    eta: "22 Aug 2026",
    status: "In Transit",
    progress: 72,
  },
  {
    id: "SHP-0002",
    supplier: "Shenzhen Beauty Pack",
    origin: "Shenzhen, China",
    destination: "Hamburg, Germany",
    eta: "8 Sep 2026",
    status: "At Sea",
    progress: 48,
  },
  {
    id: "SHP-0003",
    supplier: "Anatolia Cosmetics",
    origin: "Istanbul, Turkey",
    destination: "Düsseldorf, Germany",
    eta: "26 Aug 2026",
    status: "Customs",
    progress: 88,
  },
];

export default function ShipmentsPage() {
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

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-4">

            <div>
              <h1 className="text-4xl font-extrabold">
                Shipment Tracking
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Monitor your shipments from origin to final delivery.
              </p>
            </div>

            <Link
              href="/shipments/create"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              + Add Shipment
            </Link>

          </div>

        </div>
      </div>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Total Shipments
            </p>

            <p className="text-3xl font-bold mt-2">
              12
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              In Transit
            </p>

            <p className="text-3xl font-bold mt-2">
              7
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Customs
            </p>

            <p className="text-3xl font-bold mt-2">
              3
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Delivered
            </p>

            <p className="text-3xl font-bold mt-2">
              2
            </p>
          </div>

        </div>

      </section>

      {/* Shipment Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {shipments.map((shipment) => (

            <div
              key={shipment.id}
              className="bg-white rounded-3xl shadow-lg p-7"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Shipment
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    {shipment.id}
                  </h2>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    shipment.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : shipment.status === "Customs"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {shipment.status}
                </span>

              </div>

              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Supplier
                </p>

                <p className="font-semibold mt-1">
                  {shipment.supplier}
                </p>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div>
                  <p className="text-sm text-gray-500">
                    Origin
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {shipment.origin}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Destination
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {shipment.destination}
                  </p>
                </div>

              </div>

              {/* Progress */}
              <div className="mt-7">

                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">
                    Shipping Progress
                  </span>

                  <span className="font-semibold">
                    {shipment.progress}%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-black rounded-full"
                    style={{ width: `${shipment.progress}%` }}
                  />

                </div>

              </div>

              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Estimated Arrival
                </p>

                <p className="font-semibold mt-1">
                  {shipment.eta}
                </p>

              </div>

              <div className="flex gap-3 mt-7">

                <button className="flex-1 border border-gray-300 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                  View Details
                </button>

                <button className="flex-1 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Track
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AI Logistics Insight */}
      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="bg-black text-white rounded-3xl p-8">

          <div className="flex items-start gap-5">

            <div className="text-4xl">
              🤖
            </div>

            <div>

              <p className="text-sm text-gray-300">
                PORTEXA AI LOGISTICS INSIGHT
              </p>

              <h2 className="text-2xl font-bold mt-2">
                3 shipments may require attention
              </h2>

              <p className="text-gray-300 mt-3 max-w-3xl">
                Portexa AI can monitor estimated arrival times, customs
                status, delays and logistics events and alert you when
                action may be required.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}