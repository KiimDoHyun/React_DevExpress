import React, { useEffect, useRef, useState } from "react";
import GanttComponent from "../Components/GanttComponent";
import {
	Gtttasks,
	dependencies,
	resources,
	resourceAssignments,
} from "../Data";
const GanttContainer = () => {
	const reff = useRef();
	const scaleTypeArr = [
		"auto",
		"minutes",
		"hours",
		"days",
		"weeks",
		"months",
		"quarters",
		"years",
	];

	const [scaleType, setScaleType] = useState("weeks");

	const onChangeScaleType = (e) => {
		const {
			target: { value },
		} = e;
		setScaleType(value);
	};
	useEffect(() => {
		if (reff) {
			reff.current["_instance"].option("scaleType", "weeks");
		}
	}, []);
	const propDatas = {
		Gtttasks,
		dependencies,
		resources,
		resourceAssignments,
		reff,
		scaleTypeArr,
		scaleType,
		onChangeScaleType,
	};
	return <GanttComponent {...propDatas} />;
};

export default GanttContainer;
