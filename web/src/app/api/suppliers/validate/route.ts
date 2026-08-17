import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({
        valid: false,
        message: "Please enter a product you want to source.",
      });
    }

    const text = query.trim().toLowerCase();

    // Reject obvious nonsense / casual conversation.
    const invalidPhrases = [
      "hello",
      "hello world",
      "hi",
      "hey",
      "how are you",
      "good morning",
      "good evening",
      "blah blah",
      "blah blah blah",
      "test",
      "testing",
    ];

    const isObviouslyInvalid = invalidPhrases.some((phrase) =>
      text === phrase
    );

    if (isObviouslyInvalid) {
      return NextResponse.json({
        valid: false,
        message: "Please describe a product you want to source.",
      });
    }

    // Let AI understand the product request.
    const response = await openai.responses.create({
      model: "gpt-5",
      instructions: `
You are Portexa AI, a supplier sourcing assistant.

The user is trying to find a product to buy or source from suppliers.

A normal product name is VALID, even if it is only one or two words.

VALID:
shoes
football shoes
cosmetic bottles
makeup
laptops
chairs
LED lights
furniture
coffee machines

INVALID:
random meaningless text
gibberish
casual conversation
questions unrelated to buying or sourcing a product

Return ONLY JSON in this exact format:

{
  "valid": true,
  "product": "",
  "country": "",
  "quantity": "",
  "message": ""
}

For a valid product:
- valid must be true
- product must contain the product name
- country should be included only if mentioned
- quantity should be included only if mentioned
- message should be empty

For an invalid request:
- valid must be false
- message should say: "Please describe a product you want to source."
      `,
      input: query,
    });

    let result;

    try {
      result = JSON.parse(response.output_text);
    } catch {
      return NextResponse.json({
        valid: true,
        product: query.trim(),
        country: "",
        quantity: "",
        message: "",
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Supplier validation error:", error);

    return NextResponse.json(
      {
        valid: false,
        message: "Portexa AI could not check your request.",
      },
      { status: 500 }
    );
  }
}