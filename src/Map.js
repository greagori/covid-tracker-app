import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
	return (
		<div className="map">
			<MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
				/>
				{showDataOnMap(countries, casesType)}
			</MapContainer>
		</div>
	);
}

export default Map;
