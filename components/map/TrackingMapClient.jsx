'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const routeShape = [
  [28.6139, 77.209],
  [29.3909, 76.9635],
  [26.8467, 80.9462],
  [25.5941, 85.1376],
];

export default function TrackingMapClient({ points }) {
  return (
    <div className="card overflow-hidden p-2">
      <div className="h-[420px] w-full rounded-xl">
        <MapContainer center={[28.8, 78.5]} zoom={6} className="h-full w-full rounded-xl">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={routeShape} color="#0f766e" weight={4} opacity={0.7} />
          {points.map((point) => (
            <Marker key={point.id} position={[point.lat, point.lng]} icon={icon}>
              <Popup>
                <strong>{point.id}</strong>
                <br />
                {point.alert}
                <br />
                Route: {point.route.join(' → ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
