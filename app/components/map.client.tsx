import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon, type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { IPAddressInfo } from "~/types/types";
import MapUpdater from "~/components/mapupdater";
import iconLoc from "/icon-location.svg";

export default function MapClient({ ipGeoLocation }: { ipGeoLocation: IPAddressInfo }) {
  let position: LatLngExpression = ipGeoLocation.latitude ? [ipGeoLocation?.latitude, ipGeoLocation?.longitude] : [51.505, -0.09];

  const LocationIcon = Icon.extend({
    options: {
      iconUrl: iconLoc,
      iconSize: [26, 36],
    },
  });

  const locationIconInstance = new LocationIcon();

  return (
    <section className={"relative z-20 h-[calc(100vh-300px)] md:h-[calc(100vh-280px)]"}>
      <MapContainer id={"map"} center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={locationIconInstance}></Marker>
        <MapUpdater ipPosition={position} />
      </MapContainer>
    </section>
  );
}
