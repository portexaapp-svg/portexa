"use client";

import Link from "next/link";

const quotes = [
  {
    supplier: "Global Packaging GmbH",
    country: "Germany",
    price: "€5,200",
    unitPrice: "€0.52",
    shipping: "€450",
    leadTime: "18 days",
    payment: "30% deposit / 70% before shipment",
    score: 92,
  },
  {
    supplier: "Shenzhen Beauty Pack",
    country: "China",
    price: "€4,100",
    unitPrice: "€0.41",
    shipping: "€1,150",
    leadTime: "32 days",
    payment: "50% deposit / 50% before shipment",
    score: 86,
  },
  {
    supplier: "Anatolia Cosmetics",
    country: "Turkey",
    price: "€4,750",
    unitPrice: "€0.475",
    shipping: "€700",
    leadTime: "24 days",
    payment: "40% deposit / 60% before shipment",
    score: 89,
  },
];

export default function QuotesPage() {
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
                Quote Comparison
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Compare supplier quotations and let Portexa AI help you choose.
              </p>
            </div>

            <div className="bg-black text-white px-5 py-3 rounded-xl text-sm font-semibold">
              🤖 AI Analysis Ready
            </div>

          </div>

        </div>
      </div>

      {/* RFQ Summary */}
      <section className="max-w-7xl mx-auto px-8 pt-8">

        <div className="bg-white rounded-3xl shadow-md p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <p className="text-sm text-gray-500">
                RFQ
              </p>

              <h2 className="text-xl font-bold mt-1">
                RFQ-0001 · Cosmetic Bottles
              </h2>

              <p className="text-gray-500 mt-2">
                10,000 units · Delivery to Germany
              </p>
            </div>

            <Link
              href="/rfqs"
              className="border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-100"
            >
              View RFQs
            </Link>

          </div>

        </div>

      </section>

      {/* AI Recommendation */}
      <section className="max-w-7xl mx-auto px-8 py-8">

        <div className="bg-black text-white rounded-3xl p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>
              <div className="text-sm text-gray-300">
                PORTEXA AI RECOMMENDATION
              </div>

              <h2 className="text-3xl font-bold mt-2">
                🏆 Global Packaging GmbH
              </h2>

              <p className="text-gray-300 mt-3 max-w-2xl">
                Best overall balance of price, shipping cost, lead time and
                payment terms for this RFQ.
              </p>
            </div>

            <div className="text-center bg-white/10 rounded-2xl px-8 py-5">
              <div className="text-sm text-gray-300">
                AI SCORE
              </div>

              <div className="text-4xl font-extrabold mt-1">
                92/100
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-8 pb-12">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Supplier Quotations
            </h2>

            <p className="text-gray-500 mt-1">
              Compare the commercial terms before making a decision.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="text-left text-sm text-gray-500">

                  <th className="px-6 py-4">
                    Supplier
                  </th>

                  <th className="px-6 py-4">
                    Total Price
                  </th>

                  <th className="px-6 py-4">
                    Unit Price
                  </th>

                  <th className="px-6 py-4">
                    Shipping
                  </th>

                  <th className="px-6 py-4">
                    Lead Time
                  </th>

                  <th className="px-6 py-4">
                    Payment
                  </th>

                  <th className="px-6 py-4">
                    AI Score
                  </th>

                  <th className="px-6 py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {quotes.map((quote) => (

                  <tr
                    key={quote.supplier}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-6">

                      <div className="font-semibold">
                        {quote.supplier}
                      </div>

                      <div className="text-sm text-gray-500 mt-1">
                        {quote.country}
                      </div>

                    </td>

                    <td className="px-6 py-6 font-semibold">
                      {quote.price}
                    </td>

                    <td className="px-6 py-6">
                      {quote.unitPrice}
                    </td>

                    <td className="px-6 py-6">
                      {quote.shipping}
                    </td>

                    <td className="px-6 py-6">
                      {quote.leadTime}
                    </td>

                    <td className="px-6 py-6 text-sm text-gray-600 max-w-xs">
                      {quote.payment}
                    </td>

                    <td className="px-6 py-6">

                      <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold">
                        {quote.score}
                      </span>

                    </td>

                    <td className="px-6 py-6">

                      <button
                        className={
                          quote.score === 92
                            ? "bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"
                            : "border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
                        }
                      >
                        {quote.score === 92 ? "Recommended" : "Select"}
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* AI Insights */}
      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="text-3xl">
              💰
            </div>

            <h3 className="text-lg font-bold mt-4">
              Lowest Price
            </h3>

            <p className="text-gray-500 mt-2">
              Shenzhen Beauty Pack offers the lowest unit price at €0.41.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="text-3xl">
              🚚
            </div>

            <h3 className="text-lg font-bold mt-4">
              Fastest Delivery
            </h3>

            <p className="text-gray-500 mt-2">
              Global Packaging GmbH has the shortest estimated lead time.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="text-3xl">
              🤖
            </div>

            <h3 className="text-lg font-bold mt-4">
              AI Insight
            </h3>

            <p className="text-gray-500 mt-2">
              The cheapest quotation is not necessarily the best overall deal.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}