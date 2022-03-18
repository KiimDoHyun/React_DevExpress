import React from "react";
import GanttComponent from "../Components/GanttComponent";
import {
	Gtttasks,
	dependencies,
	resources,
	resourceAssignments,
} from "../Data";
const GanttContainer = () => {
	const propDatas = {
		Gtttasks,
		dependencies,
		resources,
		resourceAssignments,
	};
	return <GanttComponent {...propDatas} />;
};

export default GanttContainer;
