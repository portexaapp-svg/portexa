"use client";

import Link from "next/link";

const documents = [
  {
    name: "Commercial Invoice.pdf",
    type: "Commercial Invoice",
    relatedTo: "RFQ-0001",
    status: "Verified",
    date: "16 Aug 2026",
    icon: "💰",
  },
  {
    name: "Packing List.pdf",
    type: "Packing List",
    relatedTo: "SHP-0001",
    status: "Verified",
    date: "15 Aug 2026",
    icon: "📦",
  },
  {
    name: "Certificate of Origin.pdf",
    type: "Certificate of Origin",
    relatedTo: "SHP-0001",
    status: "Needs Review",
    date: "14 Aug 2026",
    icon: "📜",
  },
  {
    name: "Bill of Lading.pdf",
    type: "Bill of Lading",
    relatedTo: "SHP-0002",
    status: "Processing",
    date: "13 Aug 2026",
    icon: "🚢",
  },
];

export default function DocumentsPage() {
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
                Trade Documents
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Organize, review and manage your import documents.
              </p>
            </div>

            <button
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              + Upload Document
            </button>

          </div>

        </div>
      </div>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Total Documents
            </p>

            <p className="text-3xl font-bold mt-2">
              47
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Verified
            </p>

            <p className="text-3xl font-bold mt-2">
              32
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Needs Review
            </p>

            <p className="text-3xl font-bold mt-2">
              8
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              AI Processing
            </p>

            <p className="text-3xl font-bold mt-2">
              7
            </p>
          </div>

        </div>

      </section>

      {/* Upload Area */}
      <section className="max-w-7xl mx-auto px-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center">

            <div className="text-5xl">
              📄
            </div>

            <h2 className="text-2xl font-bold mt-4">
              Upload Trade Documents
            </h2>

            <p className="text-gray-500 mt-2">
              Upload invoices, packing lists, certificates, bills of lading
              and other import documents.
            </p>

            <button
              className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Choose File
            </button>

            <p className="text-sm text-gray-400 mt-3">
              PDF, JPG, PNG and common document formats
            </p>

          </div>

        </div>

      </section>

      {/* Documents */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">
              Your Documents
            </h2>

            <p className="text-gray-500 mt-1">
              Review documents associated with your RFQs and shipments.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="text-left text-sm text-gray-500">

                  <th className="px-6 py-4">
                    Document
                  </th>

                  <th className="px-6 py-4">
                    Type
                  </th>

                  <th className="px-6 py-4">
                    Related To
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {documents.map((document) => (

                  <tr
                    key={document.name}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <span className="text-2xl">
                          {document.icon}
                        </span>

                        <span className="font-semibold">
                          {document.name}
                        </span>

                      </div>

                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {document.type}
                    </td>

                    <td className="px-6 py-5 font-medium">
                      {document.relatedTo}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {document.date}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          document.status === "Verified"
                            ? "bg-green-100 text-green-700"
                            : document.status === "Needs Review"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {document.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <button className="text-sm font-semibold hover:underline">
                        View →
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* AI Document Assistant */}
      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="bg-black text-white rounded-3xl p-8">

          <div className="flex items-start gap-5">

            <div className="text-4xl">
              🤖
            </div>

            <div>

              <p className="text-sm text-gray-300">
                PORTEXA AI DOCUMENT ASSISTANT
              </p>

              <h2 className="text-2xl font-bold mt-2">
                Let AI check your import documents
              </h2>

              <p className="text-gray-300 mt-3 max-w-3xl">
                Portexa AI can identify missing information, detect
                inconsistencies and help organize documents by RFQ and shipment.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}