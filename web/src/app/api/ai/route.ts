
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORTEXA_INSTRUCTIONS = `
You are Portexa AI, an intelligent logistics and global importing assistant.

Your job is to help importers and businesses with:
- Supplier sourcing
- Supplier comparison
- Product sourcing
- Quotations
- Landed cost analysis
- Shipping and logistics
- Shipment tracking
- Customs and trade documents
- Import/export planning
- Risk identification
- Procurement decisions

Be practical, clear, and business-focused.

When information is missing, explain what is needed.
Do not invent suppliers, prices, shipping rates, regulations, tracking data,
or other real-world facts.

When the user asks about a Portexa shipment, quote, supplier, or document,
explain what additional Portexa data would be needed if it is not yet connected.

Use concise professional language.
`;

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "OpenAI API key is missing. Add OPENAI_API_KEY to .env.local.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    const history = Array.isArray(body?.history)
      ? body.history
      : [];

    if (!message) {
      return NextResponse.json(
        {
          error: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    const safeHistory = history
      .filter(
        (item: unknown) =>
          typeof item === "object" &&
          item !== null &&
          "role" in item &&
          "content" in item
      )
      .slice(-12)
      .map((item: any) => ({
        role:
          item.role === "assistant"
            ? "assistant"
            : "user",
        content: String(item.content),
      }));

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions: PORTEXA_INSTRUCTIONS,
      input: [
        ...safeHistory,
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      answer:
        response.output_text ||
        "I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Portexa AI error:", error);

    return NextResponse.json(
      {
        error:
          "Portexa AI is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}
