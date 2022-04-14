import React, { useEffect, useState } from "react";
import DataCell from "../../Components/Scheduler/DataCell";

const DataCellContainer = (props) => {
	const {
		data: {
			startDate,
			groups: { employeeID },
			text,
		},
	} = props;

	const isWeekEnd = (date) => {
		const day = date.getDay();
		return day === 0 || day === 6;
	};

	const getCurrentTraining = (date, employeeID) => {
		const result = (date + employeeID) % 3;
		const currentTraining = `training-background-${result}`;

		return currentTraining;
	};

	const [dayClasses, setDayClasses] = useState([
		"day-cell",
		getCurrentTraining(startDate.getDate(), employeeID),
	]);
	const [employeeClasses, setEmployeeClasses] = useState([
		`employee-${employeeID}`,
		"dx-template-wrapper",
	]);

	// useEffect(() => {
	// 	console.log("dayClasses", dayClasses);
	// 	console.log("employeeClasses", employeeClasses);
	// }, [dayClasses, employeeClasses]);

	useEffect(() => {
		if (isWeekEnd(startDate)) {
			setEmployeeClasses(
				employeeClasses.concat(`employee-weekend-${employeeID}`)
			);
		}
	}, [startDate]);

	const propDatas = {
		dayClasses,
		employeeClasses,
		text,
	};
	return <DataCell {...propDatas} />;
};

export default DataCellContainer;
