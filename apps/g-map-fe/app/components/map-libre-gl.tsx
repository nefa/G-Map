'use client';

import { useEffect, useRef } from 'react';
import mapboxgl, { Map as MapboxMap } from 'maplibre-gl';

interface MapLibreProps {
  zoom: number;
  lng: number;
  lat: number;
  pitch: number;
}

const MapLibre = ({
  zoom = 11,
  pitch = 32,
  lng = 26.145,
  lat = 44.715,
}: Partial<MapLibreProps>) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapboxMap | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        pitch,
        hash: false, // use true for url has params ^ ^
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '&copy; OpenStreetMap Contributors',
              maxzoom: 19,
            },
            // Use a different source for terrain and hillshade layers, to improve render quality
            terrainSource: {
              type: 'raster-dem',
              url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
              tileSize: 256,
            },
            hillshadeSource: {
              type: 'raster-dem',
              url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
              tileSize: 256,
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm',
            },
            {
              id: 'hills',
              type: 'hillshade',
              source: 'hillshadeSource',
              layout: { visibility: 'visible' },
              paint: { 'hillshade-shadow-color': '#473B24' },
            },
          ],
          terrain: {
            source: 'terrainSource',
            exaggeration: 1,
          },
        }, // or 'https://demotiles.maplibre.org/style.json', // Example style URL
        center: [lng, lat], // Example center coordinates [lng, lat]
        zoom, // Example zoom level
      });

      map.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
          showZoom: true,
          showCompass: true,
        })
      );

      map.addControl(
        new mapboxgl.TerrainControl({
          source: 'terrainSource',
          exaggeration: 1,
        })
      );

      mapInstance.current = map;
      return () => {
        if (mapInstance.current) {
          mapInstance.current.remove();
        }
      };
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: '400px',
        width: '100%',
        borderRadius: '25%',
        margin: '20px 0',
      }}
    />
  );
};

export default MapLibre;
