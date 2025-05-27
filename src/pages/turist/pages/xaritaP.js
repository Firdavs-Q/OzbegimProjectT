import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Xarita o‘lchami
const mapStyle = { width: '100%', height: '100vh' };

// Xarita markazi (Toshkent)
const center = { lat: 41.2995, lng: 69.2401 };

// Joylar
const places = [
  { lat: 41.2995, lng: 69.2401, name: 'Toshkent' },
  { lat: 41.3111, lng: 69.2797, name: 'Chilonzor' },
  { lat: 41.2667, lng: 69.2000, name: 'Yunusobod' },
];

function XaritaP() {
  return (
    <LoadScript googleMapsApiKey={'AIzaSyCCHzBZQ1EO0i2GYqr9wOmCAqsMWYUmJmc'}>
      <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={10}>
        {places.map((place, index) => (
          <div key={index}>
            <Marker position={{ lat: place.lat, lng: place.lng }} />
            <InfoWindow position={{ lat: place.lat, lng: place.lng }}>
              <div style={{ background: 'white', padding: '5px', border: '1px solid black', borderRadius: '4px' }}>
                {place.name}
              </div>
            </InfoWindow>
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default XaritaP;