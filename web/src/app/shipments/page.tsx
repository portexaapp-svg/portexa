"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Shipment = {
  id: string;
  supplier: string;
  origin: string;
  destination: string;
  eta: string;
  status: string;
  progress: number;
};

type Vessel = {
  name: string;
  imo: string;
  mmsi: string;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  course: number | null;
  heading: number | null;
  destination: string;
  eta: string;
  timestamp: string;
  zone: string;
  status: number | null;
};

const shipments: Shipment[] = [
  {
    id: "SHP-0001",
    supplier: "Global Packaging GmbH",
    origin: "Hamburg, Germany",
    destination: "Langenfeld, Germany",
    eta: "22 Aug 2026",
    status: "In Transit",
    progress: 72,
  },
  {
    id: "SHP-0002",
    supplier: "Shenzhen Beauty Pack",
    origin: "Shenzhen, China",
    destination: "Hamburg, Germany",
    eta: "8 Sep 2026",
    status: "At Sea",
    progress: 48,
  },
  {
    id: "SHP-0003",
    supplier: "Anatolia Cosmetics",
    origin: "Istanbul, Turkey",
    destination: "Düsseldorf, Germany",
    eta: "26 Aug 2026",
    status: "Customs",
    progress: 88,
  },
];

export default function ShipmentsPage() {
  const [selectedShipment, setSelectedShipment] =
    useState<Shipment | null>(null);

  const [imo, setImo] = useState("");
  const [mmsi, setMmsi] = useState("");
  const [vessel, setVessel] = useState<Vessel | null>(null);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState("");

  function openTracking(shipment: Shipment) {
    setSelectedShipment(shipment);
    setImo("");
    setMmsi("");
    setVessel(null);
    setTrackingError("");
  }

  function closeTracking() {
    setSelectedShipment(null);
    setVessel(null);
    setTrackingError("");
  }

  async function handleTrack(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!imo.trim() && !mmsi.trim()) {
      setTrackingError("Enter either an IMO or MMSI number.");
      return;
    }

    if (imo.trim() && mmsi.trim()) {
      setTrackingError("Enter either IMO or MMSI, not both.");
      return;
    }

    setTrackingLoading(true);
    setTrackingError("");
    setVessel(null);

    try {
      const response = await fetch("/api/shipments/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imo: imo.trim(),
          mmsi: mmsi.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Could not retrieve vessel information."
        );
      }

      setVessel(data.vessel);
    } catch (error) {
      console.error("Tracking error:", error);

      setTrackingError(
        error instanceof Error
          ? error.message
          : "Could not track this vessel."
      );
    } finally {
      setTrackingLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-8">

          <Link
            href="/dashboard"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-4">

            <div>
              <h1 className="text-4xl font-extrabold">
                Shipment Tracking
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                Monitor your shipments from origin to final delivery.
              </p>
            </div>

            <Link
              href="/shipments/create"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              + Add Shipment
            </Link>

          </div>

        </div>
      </div>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-8 py-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Total Shipments</p>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">In Transit</p>
            <p className="text-3xl font-bold mt-2">7</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Customs</p>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">Delivered</p>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

        </div>

      </section>

      {/* Shipment Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {shipments.map((shipment) => (

            <div
              key={shipment.id}
              className="bg-white rounded-3xl shadow-lg p-7"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Shipment
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    {shipment.id}
                  </h2>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    shipment.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : shipment.status === "Customs"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {shipment.status}
                </span>

              </div>

              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Supplier
                </p>

                <p className="font-semibold mt-1">
                  {shipment.supplier}
                </p>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div>
                  <p className="text-sm text-gray-500">
                    Origin
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {shipment.origin}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Destination
                  </p>

                  <p className="text-sm font-medium mt-1">
                    {shipment.destination}
                  </p>
                </div>

              </div>

              {/* Progress */}
              <div className="mt-7">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-500">
                    Shipping Progress
                  </span>

                  <span className="font-semibold">
                    {shipment.progress}%
                  </span>

                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-black rounded-full"
                    style={{
                      width: `${shipment.progress}%`,
                    }}
                  />

                </div>

              </div>

              <div className="mt-6">

                <p className="text-sm text-gray-500">
                  Estimated Arrival
                </p>

                <p className="font-semibold mt-1">
                  {shipment.eta}
                </p>

              </div>

              <div className="flex gap-3 mt-7">

                <button
                  type="button"
                  className="flex-1 border border-gray-300 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => openTracking(shipment)}
                  className="flex-1 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                >
                  Track
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* AI Logistics Insight */}
      <section className="max-w-7xl mx-auto px-8 pb-16">

        <div className="bg-black text-white rounded-3xl p-8">

          <div className="flex items-start gap-5">

            <div className="text-4xl">
              🤖
            </div>

            <div>

              <p className="text-sm text-gray-300">
                PORTEXA AI LOGISTICS INSIGHT
              </p>

              <h2 className="text-2xl font-bold mt-2">
                3 shipments may require attention
              </h2>

              <p className="text-gray-300 mt-3 max-w-3xl">
                Portexa AI can monitor estimated arrival times,
                customs status, delays and logistics events and alert
                you when action may be required.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Tracking Modal */}
      {selectedShipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">

          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b px-6 py-5">

              <div>
                <p className="text-sm text-gray-500">
                  Real Vessel Tracking
                </p>

                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedShipment.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeTracking}
                className="rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-black"
              >
                ✕
              </button>

            </div>

            <div className="p-6">

              <div className="rounded-2xl bg-gray-50 p-5 mb-6">

                <p className="text-sm text-gray-500">
                  Shipment
                </p>

                <p className="font-semibold mt-1 text-gray-900">
                  {selectedShipment.supplier}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  {selectedShipment.origin} →{" "}
                  {selectedShipment.destination}
                </p>

              </div>

              <form onSubmit={handleTrack}>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="tracking-imo"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      IMO Number
                    </label>

                    <input
                      id="tracking-imo"
                      value={imo}
                      onChange={(event) => setImo(event.target.value)}
                      placeholder="e.g. 9175717"
                      disabled={trackingLoading}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tracking-mmsi"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      MMSI Number
                    </label>

                    <input
                      id="tracking-mmsi"
                      value={mmsi}
                      onChange={(event) => setMmsi(event.target.value)}
                      placeholder="e.g. 304491000"
                      disabled={trackingLoading}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                </div>

                <p className="mt-3 text-sm text-gray-500">
                  Enter either the IMO or MMSI of the actual vessel.
                </p>

                {trackingError && (
                  <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                    {trackingError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={trackingLoading}
                  className="mt-5 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {trackingLoading
                    ? "Getting live vessel data..."
                    : "Track Real Vessel"}
                </button>

              </form>

              {vessel && (
                <div className="mt-8">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-sm text-gray-500">
                        Vessel
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 mt-1">
                        {vessel.name || "Unknown Vessel"}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        IMO {vessel.imo || "N/A"} · MMSI{" "}
                        {vessel.mmsi || "N/A"}
                      </p>
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      LIVE AIS
                    </span>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        Destination
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.destination || "Unknown"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        ETA
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.eta || "Not available"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        Speed
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.speed ?? "N/A"} knots
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        Course
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.course ?? "N/A"}°
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        Latitude
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.latitude ?? "N/A"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">
                        Longitude
                      </p>

                      <p className="font-semibold mt-1">
                        {vessel.longitude ?? "N/A"}
                      </p>
                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl bg-gray-100 p-8 text-center">

                    <p className="text-sm text-gray-500">
                      Current Vessel Position
                    </p>

                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      {vessel.latitude !== null &&
                      vessel.longitude !== null
                        ? `${vessel.latitude}, ${vessel.longitude}`
                        : "Coordinates unavailable"}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Last AIS update:{" "}
                      {vessel.timestamp || "Unknown"}
                    </p>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </main>
  );
}