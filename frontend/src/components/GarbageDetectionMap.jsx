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
const cleanIcon = new L.Icon({
  iconUrl: '../../cleanOffice.png',
  iconSize: [40, 40], 
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const garbageDetectionData = [
  { id: 1, name: 'Post Office 1 - Anisabad', lat: 25.5775, lng: 85.0930, detections: 42 },
  { id: 2, name: 'Post Office 2 - Nasik', lat: 26.1529, lng: 85.9014, detections: 42 },
  { id: 3, name: 'Post Office 3 - Adapur SO', lat: 26.9253, lng: 84.9420, detections: 45 },
  { id: 4, name: 'Post Office 4 - Jamshedpur taluk', lat: 22.8341, lng: 86.2191, detections: 58 },
  { id: 5, name: 'Post Office 5 - Jamalpur', lat: 23.0611, lng: 87.9926, detections: 68 },
  { id: 6, name: 'Post Office 6 - Ekangersarai taluk, Nalanda', lat: 25.2221, lng: 85.2319, detections: 100 },
  { id: 7, name: 'Post Office 7 - Baghibazar S.O', lat: 26.4667, lng: 84.4332, detections: 100 },
  { id: 8, name: 'Post Office 8 - Ranchi', lat: 23.3441, lng: 85.3096, detections: 92 },
  { id: 9, name: 'Post Office 9 - Barari', lat: 25.5031, lng: 87.3662, detections: 89 },
  { id: 10, name: 'Post Office 10 - Glaghat taluk', lat: 25.7711, lng: 87.4821, detections: 100 },
];

const GarbageDetectionMap = () => {
  return (
    <motion.div
      className=' map h-min w-11/12 md:w-3/4 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
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
              icon={location.detections > 70 ? cleanIcon : garbageIcon}
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

