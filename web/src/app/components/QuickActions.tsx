import Link from "next/link";

export default function QuickActions() {
  const actions = [
    {
      title: "Find Suppliers",
      description: "Search and discover verified manufacturers worldwide.",
      icon: "🏭",
      href: "/suppliers",
    },
    {
      title: "Create RFQ",
      description: "Create a request for quotation and invite suppliers.",
      icon: "📋",
      href: "/rfqs",
    },
    {
      title: "Compare Quotes",
      description: "Compare supplier prices, terms and delivery times.",
      icon: "💰",
      href: "/quotations"
    },
    {
      title: "Track Shipment",
      description: "Monitor your shipments from origin to destination.",
      icon: "🚢",
      href: "/shipments",
    },
    {
      title: "Upload Documents",
      description: "Upload invoices, packing lists and customs documents.",
      icon: "📄",
      href: "/documents",
    },
    {
      title: "Ask Portexa AI",
      description: "Get AI assistance with suppliers, logistics and importing.",
      icon: "🤖",
      href: "/ai",
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          What would you like to do today?
        </h2>

        <p className="text-gray-500 mt-2">
          Start a new import task or let Portexa AI help you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="group bg-white rounded-3xl border border-gray-100 p-7
                       shadow-sm hover:shadow-xl hover:-translate-y-1
                       transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="text-4xl">{action.icon}</div>

              <div className="text-gray-300 group-hover:text-gray-900 transition">
                →
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6">
              {action.title}
            </h3>

            <p className="text-gray-500 mt-3 leading-relaxed">
              {action.description}
            </p>

            <div className="mt-6 text-sm font-semibold text-gray-900">
              Get started →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}