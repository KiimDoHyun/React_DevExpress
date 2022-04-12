import React, { useEffect, useState } from "react";
import SchedulerComponent from "../Components/SchedulerComponent";
import { employees_scheduler as employees, data } from "../Data";

const SchedulerContainer = () => {
	const [groups, setGroups] = useState(["employeeID"]);
	const [views, setViews] = useState([
		"agenda",
		"day",
		"month",
		"timelineDay",
		"timelineMonth",
		"timelineWeek",
		"timelineWorkWeek",
		"week",
		"workWeek",
	]);
	const [currentDate, setCurrentDate] = useState(new Date(2021, 5, 2, 11, 30));
	const [showAllDayPanel, setshowAllDayPanel] = useState(false);
	const [checkData, setData] = useState(data);

	useEffect(() => {
		console.log('data', data);
	}, [])

	const propDatas = {
		groups,
		views,
		currentDate,
		employees,
		data: checkData,
		showAllDayPanel,
		setshowAllDayPanel,
	};

	return <SchedulerComponent {...propDatas} />;
};

export default SchedulerContainer;
