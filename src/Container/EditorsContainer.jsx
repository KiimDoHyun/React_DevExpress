import React, { useEffect, useState } from "react";
import EditorsComponent from "../Components/EditorsComponent";

const EditorsContainer = () => {
	/*
	      text: 'UI Superhero',
      width: 370,
      height: 260,
      color: '#f05b41',
      transform: noFlipTransform,
      border: false,
	*/
	const noFlipTransform = "scaleX(1)";
	const transformations = [
		{
			key: "Flip",
			items: [
				{ name: "0 degrees", value: noFlipTransform },
				{ name: "180 degrees", value: "scaleX(-1)" },
			],
		},
		{
			key: "Rotate",
			items: [
				{ name: "0 degrees", value: "rotate(0)" },
				{ name: "15 degrees", value: "rotate(15deg)" },
				{ name: "30 degrees", value: "rotate(30deg)" },
				{ name: "-15 degrees", value: "rotate(-15deg)" },
				{ name: "-30 degrees", value: "rotate(-30deg)" },
			],
		},
	];
	const unGrouped = [
		{ name: "0 degrees", value: noFlipTransform },
		{ name: "180 degrees", value: "scaleX(-1)" },
		{ name: "0 degrees", value: "rotate(0)" },
		{ name: "15 degrees", value: "rotate(15deg)" },
		{ name: "30 degrees", value: "rotate(30deg)" },
		{ name: "-15 degrees", value: "rotate(-15deg)" },
		{ name: "-30 degrees", value: "rotate(-30deg)" },
	];

	const applyValueModeArr = [
		'useButtons',
		'instantly'
	]
	const [applyValueMode, setapplyValueMode] = useState(applyValueModeArr[0]);
	const [text, setText] = useState("UI Superhero");
	const [width, setWidth] = useState(370);
	const [height, setHeight] = useState(260);
	const [color, setColor] = useState("#f05b41");
	const [transform, setTransform] = useState(noFlipTransform);
	const [border, setBorder] = useState(false);
	const [selectBoxGroupe, setselectBoxGroupe] = useState(true);
	const [items, setItems] = useState(transformations);
	const [showSpinButtons, setshowSpinButtons] = useState(true);

	const onChangeApplyValueMode = (e) => {
		const { value } = e;
		setapplyValueMode(value);
	}
	const onChangeText = (e) => {
		const { value } = e;
		setText(value);
	};
	const onChangeWidth = (e) => {
		const { value } = e;
		setWidth(value);
	};
	const onChangeHeight = (e) => {
		const { value } = e;
		setHeight(value);
	};
	const onChangeColor = (e) => {
		const { value } = e;
		setColor(value);
	};
	const onChangeTransform = (e) => {
		const { value } = e;
		setTransform(value);
	};
	const onChangeBorder = (e) => {
		const { value } = e;
		setBorder(value);
	};

	// groupe 여부에 따라 selectBox 에 설정할 데이터 형태도 다르다.
	useEffect(() => {
		if (selectBoxGroupe) {
			setItems(transformations);
		} else {
			setItems(unGrouped);
		}
	}, [selectBoxGroupe]);
	const propDatas = {
		text,
		width,
		height,
		color,
		transform,
		border,
		transformations,
		onChangeText,
		onChangeWidth,
		onChangeHeight,
		onChangeColor,
		onChangeTransform,
		onChangeBorder,
		selectBoxGroupe,
		setselectBoxGroupe,
		items,
		applyValueModeArr,
		applyValueMode,
		onChangeApplyValueMode,
		showSpinButtons, 
		setshowSpinButtons,
	};
	return <EditorsComponent {...propDatas} />;
};

export default EditorsContainer;
