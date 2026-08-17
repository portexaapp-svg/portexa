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

    const response = await openai.responses.create({
      model: "gpt-5",
      instructions: `
You are Portexa AI.

Decide whether the user's text is a genuine product sourcing request.

A valid request can be something like:
- cosmetic bottles
- football shoes
- 10,000 makeup containers from Germany
- I need manufacturers for LED lights

An invalid request is casual or meaningless text such as:
- hello
- hello world
- blah blah blah
- how are you

Return ONLY JSON in this exact format:

{
  "valid": true,
  "product": "",
  "country": "",
  "quantity": "",
  "message": ""
}

For valid requests:
- valid = true
- extract the product
- extract country if mentioned
- extract quantity if mentioned
- message can be empty

For invalid requests:
- valid = false
- message should politely ask the user to describe the product they want to source.
      `,
      input: query,
    });

    const result = JSON.parse(response.output_text);

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