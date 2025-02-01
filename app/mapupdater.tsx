import type { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function MapUpdater({ ipPosition }: { ipPosition: LatLngExpression }) {
  const map = useMap();
  useEffect(() => {
    map.panTo(ipPosition);
  }, [ipPosition, map]);
  return null;
}
