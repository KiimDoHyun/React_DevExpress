import React, { useEffect, useState } from "react";
import MapsComponent from "../Components/MapsComponent";
import * as mapsData from "devextreme/dist/js/vectormap-data/world.js";
import { countriesGDP } from "../Data";

const MapsContainer = () => {
	const [mapBounds, setMapBounds] = useState([-180, 85, 180, -60]);
	const [colorGroups, setColorGroups] = useState([
		0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000,
	]);

	const customizeLayer = (elements) => {
		elements.forEach((element) => {
			const countryGDPData = countriesGDP[element.attribute("name")];
			element.attribute("total", (countryGDPData && countryGDPData.total) || 0);
		});
	};

	const { format } = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 0,
	});
	const customizeLegendText = (arg) => {
		return `${format(arg.start)} to ${format(arg.end)}`;
	};

	useEffect(() => {
		console.log("mapsData: ", mapsData);
	}, []);
	const propDatas = {
		mapBounds,
		mapsData,
		colorGroups,
		customizeLegendText,
		customizeLayer,
	};
	return <MapsComponent {...propDatas} />;
};

export default MapsContainer;
