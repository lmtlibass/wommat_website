
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const position = [51.505, -0.09]; 

  return (
    <div className='container'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Siège <br /> Wommate.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
