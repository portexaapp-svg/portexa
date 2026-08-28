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
};

const vesselIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #111827;
      border: 4px solid white;
      box-shadow: 0 4px 14px rgba(0,0,0,.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
    ">
      🚢
    </div>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 21],
});

export default function VesselMap({
  latitude,
  longitude,
  vesselName,
  destination,
  speed,
  course,
}: VesselMapProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
      <MapContainer
        center={[latitude, longitude]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "420px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[latitude, longitude]}
          icon={vesselIcon}
        >
          <Popup>
            <div className="min-w-[180px]">
              <strong>{vesselName || "Unknown Vessel"}</strong>

              <div className="mt-2 text-sm">
                <div>
                  Destination:{" "}
                  {destination || "Unknown"}
                </div>

                <div>
                  Speed:{" "}
                  {speed !== null ? `${speed} knots` : "N/A"}
                </div>

                <div>
                  Course:{" "}
                  {course !== null ? `${course}°` : "N/A"}
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}