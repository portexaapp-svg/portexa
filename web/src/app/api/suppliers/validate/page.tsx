import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const query = typeof body.query === "string" ? body.query.trim() : "";

    if (!query) {
      return NextResponse.json(
        {
          valid: false,
          message: "Please enter what you want to import.",
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      instructions: `
You are Portexa AI, an import and supplier discovery assistant.

Your job is to determine whether the user's message contains a genuine
product sourcing/import request.

Return ONLY valid JSON with this exact structure:
{
  "valid": true or false,
  "product": "string",
  "quantity": "string",
  "country": "string",
  "message": "string"
}

Rules:
- valid=true when the user is asking to source, buy, import, manufacture,
  or find suppliers for a real product.
- Natural language is allowed.
- Extract a quantity when present.
- Extract a preferred supplier country when present.
- If the message is not a product/import/supplier request, set valid=false.
- When valid=false, give a short helpful message asking the user to describe
  the product they want to source.
`,
      input: query,
    });

    const raw = response.output_text.trim();

    let result;

    try {
      result = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        {
          valid: false,
          message: "I couldn't understand that request. Please describe the product you want to source.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Supplier validation error:", error);

    return NextResponse.json(
      {
        valid: false,
        message: "Portexa AI is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}