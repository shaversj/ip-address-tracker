import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { IPAddressInfo } from "~/types/types";
import MapUpdater from "~/mapupdater";

export default function MapClient({ ipGeoLocation }: { ipGeoLocation: IPAddressInfo }) {
  let ipPosition: LatLngExpression = [ipGeoLocation.location.lat, ipGeoLocation.location.lng];

  return (
    <section className={"relative z-20 w-full"}>
      <MapContainer id={"map"} center={ipPosition} zoom={10} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={ipPosition}></Marker>
        <MapUpdater ipPosition={ipPosition} />
      </MapContainer>
    </section>
  );
}
