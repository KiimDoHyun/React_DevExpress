import React, { useState } from "react";
import HtmlEditorComponent from "../Components/HtmlEditorComponent";
import { markup } from "../Data";
const HtmlEditorContainer = () => {
	const [sizeValues, setsizeValues] = useState([
		"8pt",
		"10pt",
		"12pt",
		"14pt",
		"18pt",
		"24pt",
		"36pt",
	]);
	const [fontValues, setfontValues] = useState([
		"Arial",
		"Courier New",
		"Georgia",
		"Impact",
		"Lucida Console",
		"Tahoma",
		"Times New Roman",
		"Verdana",
	]);
	const [headerValues, setheaderValues] = useState([false, 1, 2, 3, 4, 5, 6]); // 6까지
	const [multiline, setmultiline] = useState(true);

	const propDatas = {
		sizeValues,
		fontValues,
		headerValues,
		multiline,
		setmultiline,
		markup,
	};
	return <HtmlEditorComponent {...propDatas} />;
};

export default HtmlEditorContainer;
