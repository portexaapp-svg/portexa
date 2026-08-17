
import { NextResponse } from "next/server";

const invalidPhrases = [
  "hello",
  "hello world",
  "hi",
  "hey",
  "how are you",
  "good morning",
  "good evening",
  "test",
  "testing",
  "blah",
  "blah blah",
  "blah blah blah",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const product =
      typeof body.product === "string" ? body.product.trim() : "";

    const country =
      typeof body.country === "string" ? body.country.trim() : "";

    const quantity =
      typeof body.quantity === "string" ? body.quantity.trim() : "";

    if (!product) {
      return NextResponse.json({
        valid: false,
        message: "Please enter a product you want to source.",
      });
    }

    const normalizedProduct = product.toLowerCase();

    if (invalidPhrases.includes(normalizedProduct)) {
      return NextResponse.json({
        valid: false,
        message: "Please enter a real product you want to source.",
      });
    }

    // A product name such as "shoes" is valid even without
    // country or quantity.
    return NextResponse.json({
      valid: true,
      product,
      country,
      quantity,
      message: "",
    });
  } catch (error) {
    console.error("Supplier validation error:", error);

    return NextResponse.json(
      {
        valid: false,
        message: "Could not validate the supplier request.",
      },
      { status: 500 }
    );
  }
}

