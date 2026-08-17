import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const query =
      typeof body.query === "string" ? body.query.trim() : "";

    if (!query) {
      return NextResponse.json({
        valid: false,
        message: "Please tell me what product you want to source.",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5.6",
      instructions: `
You are Portexa AI, an assistant for global importers.

Analyze the user's request and determine whether it is a genuine
product sourcing or supplier request.

Return ONLY JSON in this exact format:

{
  "valid": true,
  "product": "",
  "quantity": "",
  "country": "",
  "message": ""
}

Rules:
- valid=true if the request involves buying, sourcing, importing,
  manufacturing, or finding suppliers for a product.
- Understand natural language.
- Extract the product.
- Extract quantity if provided.
- Extract country if provided.
- If the request is unrelated or does not describe a product,
  valid=false.
- For invalid requests, message should briefly ask the user to
  describe the product they want to source.
`,
      input: query,
    });

    const result = JSON.parse(response.output_text);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Portexa AI validation error:", error);

    return NextResponse.json(
      {
        valid: false,
        message:
          "Portexa AI is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}