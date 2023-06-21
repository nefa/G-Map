import type { NextPage } from 'next';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef } from 'react';

const Map: NextPage = () => {
  const mapContainer = useRef(null);

  return (
    <main>
      <div className="map-container" ref={mapContainer} />
    </main>
  );
};
export default Map;
