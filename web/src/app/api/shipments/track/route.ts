
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const imo =
      typeof body?.imo === "string" ? body.imo.trim() : "";

    const mmsi =
      typeof body?.mmsi === "string" ? body.mmsi.trim() : "";

    if (!imo && !mmsi) {
      return NextResponse.json(
        { error: "Please enter an IMO or MMSI number." },
        { status: 400 }
      );
    }

    if (imo && mmsi) {
      return NextResponse.json(
        { error: "Enter either an IMO or an MMSI, not both." },
        { status: 400 }
      );
    }

    if (imo && !/^\d+$/.test(imo)) {
      return NextResponse.json(
        { error: "IMO must contain numbers only." },
        { status: 400 }
      );
    }

    if (mmsi && !/^\d+$/.test(mmsi)) {
      return NextResponse.json(
        { error: "MMSI must contain numbers only." },
        { status: 400 }
      );
    }

    const apiKey = process.env.VESSELFINDER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "VesselFinder API key is missing." },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      userkey: apiKey,
      format: "json",
      interval: "60",
    });

    if (imo) {
      params.set("imo", imo);
    }

    if (mmsi) {
      params.set("mmsi", mmsi);
    }

    const response = await fetch(
      `https://api.vesselfinder.com/vessels?${params.toString()}`,
      {
        cache: "no-store",
      }
    );

    const raw = await response.text();

    if (!response.ok) {
      console.error("VesselFinder API error:", raw);

      return NextResponse.json(
        { error: "VesselFinder could not return vessel data." },
        { status: response.status }
      );
    }

    let data: unknown;

    try {
      data = JSON.parse(raw);
    } catch {
      console.error("Invalid VesselFinder JSON:", raw);

      return NextResponse.json(
        { error: "VesselFinder returned invalid data." },
        { status: 502 }
      );
    }

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: "No vessel found for that IMO or MMSI." },
        { status: 404 }
      );
    }

    const firstResult = data[0];

    if (
      typeof firstResult !== "object" ||
      firstResult === null ||
      !("AIS" in firstResult)
    ) {
      return NextResponse.json(
        { error: "No AIS data was returned for this vessel." },
        { status: 404 }
      );
    }

    const ais = firstResult.AIS;

    if (typeof ais !== "object" || ais === null) {
      return NextResponse.json(
        { error: "AIS data is unavailable." },
        { status: 404 }
      );
    }

    const vessel = ais as Record<string, unknown>;

    return NextResponse.json({
      vessel: {
        name: String(vessel.NAME ?? ""),
        imo: String(vessel.IMO ?? ""),
        mmsi: String(vessel.MMSI ?? ""),
        latitude:
          typeof vessel.LATITUDE === "number"
            ? vessel.LATITUDE
            : null,
        longitude:
          typeof vessel.LONGITUDE === "number"
            ? vessel.LONGITUDE
            : null,
        speed:
          typeof vessel.SPEED === "number"
            ? vessel.SPEED
            : null,
        course:
          typeof vessel.COURSE === "number"
            ? vessel.COURSE
            : null,
        heading:
          typeof vessel.HEADING === "number"
            ? vessel.HEADING
            : null,
        destination: String(vessel.DESTINATION ?? ""),
        eta: String(vessel.ETA ?? ""),
        timestamp: String(vessel.TIMESTAMP ?? ""),
        zone: String(vessel.ZONE ?? ""),
        status:
          typeof vessel.NAVSTAT === "number"
            ? vessel.NAVSTAT
            : null,
      },
    });
  } catch (error) {
    console.error("Shipment tracking error:", error);

    return NextResponse.json(
      {
        error: "Shipment tracking is temporarily unavailable.",
      },
      { status: 500 }
    );
  }
}
