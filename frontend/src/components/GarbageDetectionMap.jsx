import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';


const garbageIcon = new L.Icon({
  iconUrl: '../../litter.png',
  iconSize: [40, 40], 
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const garbageDetectionData = [
  { id: 1, name: 'Post Office 1 - New Delhi', lat: 28.6139, lng: 77.209, detections: 120 },
  { id: 2, name: 'Post Office 2 - Mumbai', lat: 19.076, lng: 72.8777, detections: 75 },
  { id: 3, name: 'Post Office 3 - Chennai', lat: 13.0827, lng: 80.2707, detections: 60 },
  { id: 4, name: 'Post Office 4 - Kolkata', lat: 22.5726, lng: 88.3639, detections: 90 },
  { id: 5, name: 'Post Office 5 - Bangalore', lat: 12.9716, lng: 77.5946, detections: 110 },
  { id: 6, name: 'Post Office 6 - Hyderabad', lat: 17.3850, lng: 78.4867, detections: 80 },
  { id: 7, name: 'Post Office 7 - Pune', lat: 18.5204, lng: 73.8567, detections: 65 },
  { id: 8, name: 'Post Office 8 - Ahmedabad', lat: 23.0225, lng: 72.5714, detections: 95 },
  { id: 9, name: 'Post Office 9 - Bhagalpur', lat: 25.2425, lng: 86.9842, detections: 70 },
];

const GarbageDetectionMap = () => {
  return (
    <motion.div
      className=' h-min w-11/12 md:w-3/4 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{backgroundColor:'#F5EDED'}}
    >
      <h2 className='text-xl font-semibold text-black mb-4'>Geospatial Map of Garbage Detections</h2>
      <div className='h-[500px] rounded-lg overflow-hidden'>
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {garbageDetectionData.map(location => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={garbageIcon}
            >
              <Popup>
                <div>
                  <h3 className='text-lg font-semibold'>{location.name}</h3>
                  <p>Detections: {location.detections}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default GarbageDetectionMap;

