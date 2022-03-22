import React from "react";
import PieChartComponent from "../../Components/Maps/PieChartComponent";
const PieChartContainer = (props) => {
	function customizeText(pointInfo) {
		return `${pointInfo.argument[0].toUpperCase()}${pointInfo.argument.slice(
			1
		)}: $${pointInfo.value}M`;
	}

	const propDatas = {
		data: props.data,
		customizeText,
	};

	return <PieChartComponent {...propDatas} />;
};

export default PieChartContainer;
