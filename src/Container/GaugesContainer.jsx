import React, { useState } from "react";
import GaugesComponent from "../Components/GaugesComponent";

const GaugesContainer = () => {
	const [color, setColor] = useState("#f05b41");
	const [speedValue, setSpeedValue] = useState(40);
	const themeArr = [
		"generic.dark",
		"generic.light",
		"generic.contrast",
		"generic.carmine",
		"generic.darkmoon",
		"generic.darkviolet",
		"generic.greenmist",
		"generic.softblue",
		"material.blue.light",
		"material.lime.light",
		"material.orange.light",
		"material.purple.light",
		"material.teal.light",
	];

	const handleSpeedChange = ({ value }) => {
		setSpeedValue(value);
	};

	const handleColorChange = ({ value }) => {
		setColor(value);
	};

	const onChangeTheme = (e) => {
		const {
			target: { value },
		} = e;
		setTheme(value);
	};

	const onChangecontainerBackgroundColor = ({ value }) => {
		setcontainerBackgroundColor(value);
	};
	// 센터 게이지 바늘
	const [first, setFirst] = useState(true);
	const [second, setSecond] = useState(true);
	const [theme, setTheme] = useState("generic.dark"); // 눈금 배경색
	const [containerBackgroundColor, setcontainerBackgroundColor] =
		useState("#f05b41"); // 바늘 가운데 색

	const propDatas = {
		color,
		speedValue,
		handleSpeedChange,
		handleColorChange,
		themeArr,
		theme,
		containerBackgroundColor,
		onChangecontainerBackgroundColor,
		onChangeTheme,
	};

	return <GaugesComponent {...propDatas} />;
};

export default GaugesContainer;
