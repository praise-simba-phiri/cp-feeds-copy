"use client";

import { useMemo } from "react";
import L from "leaflet";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { depots, malawiBounds, malawiCenter, type Depot } from "@/lib/data";

const depotIcon = (() => {
  const html =
    '<span style="display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#dc1b22;color:#fff;font-weight:900;font-size:13px;border:3px solid #fff;box-shadow:0 8px 18px -8px rgba(15,10,43,0.55);">●</span>';
  return L.divIcon({
    className: "cp-depot-marker",
    html,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -16],
  });
})();

type Props = {
  selected?: Depot | null;
};

export default function MalawiMap({ selected }: Props) {
  const tileUrl = useMemo(
    () => "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    [],
  );

  return (
    <MapContainer
      center={selected ? [selected.lat, selected.lng] : malawiCenter}
      zoom={selected ? 9 : 7}
      bounds={selected ? undefined : malawiBounds}
      scrollWheelZoom={false}
      zoomControl
      maxBounds={[
        [-19, 30],
        [-7, 38],
      ]}
      style={{ width: "100%", height: "100%", background: "#eef2fb" }}
    >
      <TileLayer
        url={tileUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {depots.map((d) => (
        <Circle
          key={`${d.name}-area`}
          center={[d.lat, d.lng]}
          radius={55000}
          pathOptions={{
            color: "#2a1b8c",
            fillColor: "#2a1b8c",
            fillOpacity: 0.12,
            weight: 1,
          }}
        />
      ))}
      {depots.map((d) => (
        <Marker
          key={d.name}
          position={[d.lat, d.lng]}
          icon={depotIcon}
        >
          <Popup>
            <div style={{ fontFamily: "inherit", padding: "2px 4px" }}>
              <strong style={{ fontSize: 14, color: "#0f0a2b" }}>
                {d.name}
              </strong>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#dc1b22",
                  fontWeight: 800,
                  margin: "2px 0",
                }}
              >
                {d.region}
              </div>
              <div style={{ fontSize: 12, color: "#3a334f" }}>{d.detail}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
