import React from 'react';
import GoogleMapReact from 'google-map-react';

const GMap = () => {
  const mapOptions = {
    // Set your desired map options here
  };

  const center = {
    lat: 37.7749, // Example latitude
    lng: -122.4194, // Example longitude
  };

  console.log('google map options: ', mapOptions);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }} // Replace with your Google Maps API key
        defaultCenter={center}
        defaultZoom={10}
        options={mapOptions}
      ></GoogleMapReact>
    </div>
  );
};

export default GMap;
