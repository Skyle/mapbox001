import { useRef, useEffect } from "react";
import { initMap } from "./utils/initMap";
import { Map } from "mapbox-gl";
import { generateNewMarker } from "./utils/generateNewMarker";

export const MapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInitRef = useRef<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapInitRef.current = initMap(mapRef.current, [13.3777, 52.5163]);
    }
  }, []);

  useEffect(() => {
    if (mapInitRef.current) {
      fetch("https://restcountries.com/v3.1/capital/Berlin")
        .then((res) => res.json())
        .then((data) => {
          generateNewMarker({
            map: mapInitRef.current!,
            lng: data[0].latlng[1],
            lat: data[0].latlng[0],
          });
        });
      fetch("https://restcountries.com/v3.1/capital/Paris")
        .then((res) => res.json())
        .then((data) => {
          generateNewMarker({
            map: mapInitRef.current!,
            lng: data[0].latlng[1],
            lat: data[0].latlng[0],
          });
        });
      fetch("https://restcountries.com/v3.1/capital/Brussels")
        .then((res) => res.json())
        .then((data) => {
          generateNewMarker({
            map: mapInitRef.current!,
            lng: data[0].latlng[1],
            lat: data[0].latlng[0],
          });
        });
    }
  }, []);

  return <div ref={mapRef} className="map" />;
};
