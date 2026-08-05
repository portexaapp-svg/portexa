import Link from "next/link";

export default function QuickActions() {
  const actions = [
    {
      title: "Find Suppliers",
      description: "Search verified manufacturers worldwide.",
      icon: "🔍",
      href: "/suppliers",
    },
    {
      title: "Create RFQ",
      description: "Generate a new quotation request.",
      icon: "📄",
      href: "/rfqs",
    },
    {
      title: "Track Shipments",
      description: "Monitor all shipments in one place.",
      icon: "🚢",
      href: "/shipments",
    },
    {
      title: "Ask Portexa AI",
      description: "Get AI assistance for importing tasks.",
      icon: "🤖",
      href: "/ai",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-6">
        What would you like to do today?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="bg-white rounded-3xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-5xl mb-5">{action.icon}</div>

            <h3 className="text-xl font-bold">
              {action.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}