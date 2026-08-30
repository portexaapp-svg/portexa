"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Find cosmetic packaging suppliers in China",
  "Compare three supplier quotations",
  "Calculate the landed cost of importing 10,000 units",
  "What documents do I need for an import shipment?",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Portexa AI. I can help you source products, compare suppliers, analyze quotations, plan shipments, estimate landed costs, and manage import documentation. What are you working on?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message || loading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Portexa AI could not respond."
        );
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.answer || "I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("AI request error:", error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Portexa AI is temporarily unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function useSuggestion(text: string) {
    setInput(text);
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <Link
              href="/dashboard"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
              Portexa AI
            </h1>
          </div>

          <div className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            AI Workspace
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="flex min-h-[720px] flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="border-b px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-xl text-white">
                  ✦
                </div>

                <div>
                  <h2 className="font-bold text-gray-900">
                    Portexa AI Assistant
                  </h2>

                  <p className="text-sm text-gray-500">
                    Your intelligent import and logistics workspace
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {messages.map((message, index) => {
                const isUser = message.role === "user";

                return (
                  <div
                    key={index}
                    className={
                      isUser
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        isUser
                          ? "max-w-[85%] rounded-2xl bg-black px-5 py-4 text-white"
                          : "max-w-[85%] rounded-2xl bg-gray-100 px-5 py-4 text-gray-900"
                      }
                    >
                      <p className="whitespace-pre-wrap text-sm leading-6">
                        {message.content}
                      </p>
                    </div>
                  </div>
                );
              })}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-gray-100 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-500" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-500" />
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t p-5">
              <form
                onSubmit={sendMessage}
                className="flex gap-3"
              >
                <input
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  placeholder="Ask Portexa AI anything about your import..."
                  disabled={loading}
                  className="flex-1 rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                />

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? "..." : "Send"}
                </button>
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-black p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Portexa Intelligence
              </p>

              <h2 className="mt-3 text-xl font-bold">
                Your AI import assistant
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Ask questions about sourcing, logistics,
                suppliers, quotations, shipments, and
                international trade.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="font-bold text-gray-900">
                Try asking
              </h3>

              <div className="mt-4 space-y-3">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => useSuggestion(suggestion)}
                    className="w-full rounded-xl border border-gray-200 p-3 text-left text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow">
              <h3 className="font-bold text-gray-900">
                Coming next
              </h3>

              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div>✓ Supplier intelligence</div>
                <div>✓ Quote comparison</div>
                <div>✓ Landed cost analysis</div>
                <div>✓ Shipment intelligence</div>
                <div>✓ Document analysis</div>
                <div>✓ Risk detection</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
