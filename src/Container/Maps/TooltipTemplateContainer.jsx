import React from "react";
import { countriesGDP } from "../../Data";
import TooltipTemplate from "../../Components/Maps/TooltipTemplate.jsx";
import PieChartContainer from "./PieChartContainer";

const TooltipTemplateContainer = (info) => {
	const name = info.attribute("name");
	const countryGDPData = countriesGDP[name];
	const total = countryGDPData && countryGDPData.total;

	const { format } = new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 0,
	});

	function getPieData(name) {
		return countriesGDP[name]
			? [
					{ name: "industry", value: countriesGDP[name].industry },
					{ name: "services", value: countriesGDP[name].services },
					{ name: "agriculture", value: countriesGDP[name].agriculture },
			  ]
			: null;
	}
	const pieData = getPieData(name);

	const gdpInfo = total ? (
		<div id="nominal">{`Nominal GDP: $${format(total)}M`}</div>
	) : null;

	const graphic = pieData ? (
		<PieChartContainer data={pieData}></PieChartContainer>
	) : (
		<div>No economic development data</div>
	);

	const propDatas = {
		info,
		gdpInfo,
		graphic,
	};
	return <TooltipTemplate {...propDatas} />;
};

export default TooltipTemplateContainer;
