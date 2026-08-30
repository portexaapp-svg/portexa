"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type VesselMapProps = {
  latitude: number;
  longitude: number;
  vesselName: string;
  destination: string;
  speed: number | null;
  course: number | null;
  heading: number | null;
};

const vesselIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #111827;
      border: 4px solid white;
      box-shadow: 0 4px 16px rgba(0,0,0,0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
    ">
      🚢
    </div>
  `,
  iconSize: [46, 46],
  iconAnchor: [23, 23],
});

export default function VesselMap({
  latitude,
  longitude,
  vesselName,
  destination,
  speed,
  course,
  heading,
}: VesselMapProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between bg-white px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Current Vessel Position
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Live AIS location
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          ● LIVE
        </span>
      </div>

      <MapContainer
        center={[latitude, longitude]}
        zoom={6}
        scrollWheelZoom={true}
        style={{
          height: "420px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[latitude, longitude]}
          icon={vesselIcon}
        >
          <Popup>
            <strong>{vesselName || "Unknown Vessel"}</strong>

            <div className="mt-2 text-sm">
              <div>
                Destination: {destination || "Unknown"}
              </div>

              <div>
                Speed:{" "}
                {speed !== null ? `${speed} knots` : "N/A"}
              </div>

              <div>
                Course:{" "}
                {course !== null ? `${course}°` : "N/A"}
              </div>

              <div>
                Heading:{" "}
                {heading !== null ? `${heading}°` : "N/A"}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}