import React, { useState } from "react";
import SchedulerComponent from "../Components/SchedulerComponent";
import { employees_scheduler as employees, data } from "../Data";

const SchedulerContainer = () => {
	const currentViewType = [
		"agenda",
		"day",
		"month",
		"timelineDay",
		"timelineMonth",
		"timelineWeek",
		"timelineWorkWeek",
		"week",
		"workWeek",
	];

	const [groups, setGroups] = useState(["employeeID"]);
	const [views, setViews] = useState(["month"]);
	const [currentDate, setCurrentDate] = useState(new Date(2021, 5, 2, 11, 30));

	const [currentView, setCurrentView] = useState("month");

	const onChangeCurrentView = (e) => {
		const {
			target: { value },
		} = e;
		setCurrentView(value);
	};

	const propDatas = {
		groups,
		views,
		currentDate,
		employees,
		data,
		currentViewType,
		currentView,
		onChangeCurrentView,
	};

	return <SchedulerComponent {...propDatas} />;
};

export default SchedulerContainer;
