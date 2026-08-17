"use client";

import Link from "next/link";
import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi! I'm Portexa AI. I can help you with suppliers, RFQs, quotations, shipments, and trade documents.",
    },
  ]);

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      text: trimmedMessage,
    };

    const aiMessage: Message = {
      role: "ai",
      text: getAIResponse(trimmedMessage),
    };

    setMessages((current) => [
      ...current,
      userMessage,
      aiMessage,
    ]);

    setMessage("");
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">

          <Link
            href="/dashboard"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to Dashboard
          </Link>

          <div className="flex items-center gap-4 mt-5">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl">
              🤖
            </div>

            <div>
              <h1 className="text-3xl font-extrabold">
                Portexa AI
              </h1>

              <p className="text-gray-500 mt-1">
                Your AI assistant for global importing.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main */}
      <section className="max-w-5xl mx-auto px-8 py-10">

        {/* Quick prompts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          <button
            onClick={() =>
              setMessage(
                "Find me manufacturers for 10,000 cosmetic bottles in Germany."
              )
            }
            className="bg-white rounded-2xl shadow-sm border p-5 text-left hover:shadow-md transition"
          >
            <div className="text-2xl">
              🏭
            </div>

            <h3 className="font-bold mt-3">
              Find Suppliers
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Search suppliers for a product and destination.
            </p>
          </button>

          <button
            onClick={() =>
              setMessage(
                "Create an RFQ for 10,000 cosmetic bottles."
              )
            }
            className="bg-white rounded-2xl shadow-sm border p-5 text-left hover:shadow-md transition"
          >
            <div className="text-2xl">
              📋
            </div>

            <h3 className="font-bold mt-3">
              Create RFQ
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Generate a professional quotation request.
            </p>
          </button>

          <button
            onClick={() =>
              setMessage(
                "Which supplier quotation has the best overall value?"
              )
            }
            className="bg-white rounded-2xl shadow-sm border p-5 text-left hover:shadow-md transition"
          >
            <div className="text-2xl">
              💰
            </div>

            <h3 className="font-bold mt-3">
              Compare Quotes
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Analyse price, shipping, lead time and terms.
            </p>
          </button>

          <button
            onClick={() =>
              setMessage(
                "What documents are missing from my current shipment?"
              )
            }
            className="bg-white rounded-2xl shadow-sm border p-5 text-left hover:shadow-md transition"
          >
            <div className="text-2xl">
              📄
            </div>

            <h3 className="font-bold mt-3">
              Check Documents
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Review your import documentation.
            </p>
          </button>

        </div>

        {/* Chat */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">
              Ask Portexa AI
            </h2>

            <p className="text-gray-500 mt-1">
              Ask a question about your import operations.
            </p>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-5 min-h-[420px] max-h-[520px] overflow-y-auto">

            {messages.map((chatMessage, index) => (

              <div
                key={index}
                className={`flex ${
                  chatMessage.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                    chatMessage.role === "user"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >

                  <div className="text-xs font-semibold mb-2 opacity-60">
                    {chatMessage.role === "user"
                      ? "YOU"
                      : "PORTEXA AI"}
                  </div>

                  <p className="leading-relaxed">
                    {chatMessage.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Input */}
          <div className="p-6 border-t">

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask Portexa AI anything..."
                className="flex-1 border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />

              <button
                onClick={handleSend}
                className="bg-black text-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Send
              </button>

            </div>

            <p className="text-xs text-gray-400 mt-3">
              Prototype mode — AI responses are currently simulated.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

function getAIResponse(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("supplier") || text.includes("manufacturer")) {
    return "I can help you identify suitable suppliers. For a real search, Portexa will use your product requirements, destination, supplier type and other filters to rank potential suppliers.";
  }

  if (text.includes("rfq") || text.includes("quotation request")) {
    return "I can help create the RFQ. Portexa can turn your product requirements, quantity, specifications and delivery terms into a structured request for quotation.";
  }

  if (
    text.includes("quote") ||
    text.includes("quotation") ||
    text.includes("best supplier")
  ) {
    return "I can compare quotations using more than price alone. Portexa can consider product price, shipping cost, lead time, payment terms and other commercial factors.";
  }

  if (
    text.includes("document") ||
    text.includes("documents") ||
    text.includes("shipment")
  ) {
    return "I can help review the documents associated with an import shipment. Portexa will eventually check documents for completeness and identify items that may need attention.";
  }

  return "I understand. Ask me about suppliers, RFQs, quotations, shipments or trade documents, and I'll help you work through the task.";
}