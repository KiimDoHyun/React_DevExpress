import React, { useState } from "react";
import ChartsComponent from "../Components/ChartsComponent";
import { complaintsData } from "../Data";

const ChartsContainer = () => {
	const paletteArr = [
		"Bright",
		"Harmony Light",
		"Ocean",
		"Pastel",
		"Soft",
		"Soft Pastel",
		"Vintage",
		"Violet",
		"Carmine",
		"Dark Moon",
		"Dark Violet",
		"Green Mist",
		"Soft Blue",
		"Material",
		"Office",
	];

	const overlappingBehaviorArr = ["rotate", "stagger", "none", "hide"];
	const [overlappingBehavior, setoverlappingBehavior] = useState("rotate");
	const onChangeoverlappingBehavior = (e) => {
		const {
			target: { value },
		} = e;
		setoverlappingBehavior(value);
	};

	const [palette, setPalette] = useState("Harmony Light");
	const onChangePalette = (e) => {
		const {
			target: { value },
		} = e;
		setPalette(value);
	};
	const customizePercentageText = ({ valueText }) => {
		return `${valueText}%`;
	};

	const customizeTooltip = (pointInfo) => {
		return {
			html: `<div><div class="tooltip-header">${pointInfo.argumentText}</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName}</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText}</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName}</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText}</span>% </div></div></div>`,
		};
	};

	/*
    sort: 
    리턴값이 0 보다 작으면 a가 b보다 앞에 온다.
    리턴값이 0 보다 크면 a가 b보다 뒤에 온다.
    리턴값이 0 이면 순서를 변경하지 않는다.
    원본 배열이 변경된다.
    */

	const data = complaintsData.sort((a, b) => b.count - a.count);

	const totalCount = data.reduce(
		(prevValue, item) => prevValue + item.count,
		0
	);
	let cumulativeCount = 0;

	const dataArray = data.map((item) => {
		cumulativeCount += item.count;
		return {
			complaint: item.complaint,
			count: item.count,
			cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
		};
	});

	const propDatas = {
		customizePercentageText,
		customizeTooltip,
		dataArray,
		paletteArr,
		palette,
		onChangePalette,
		overlappingBehaviorArr,
		overlappingBehavior,
		onChangeoverlappingBehavior,
	};
	return <ChartsComponent {...propDatas} />;
};

export default ChartsContainer;
