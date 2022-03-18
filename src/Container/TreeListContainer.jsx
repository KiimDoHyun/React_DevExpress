import React, { useEffect, useState } from "react";
import TreeListComponent from "../Components/TreeListComponent";
import { tasks, employees, priorities } from "../Data";

const TreeListContainer = () => {
	const [expandedKeys, setexpandedKeys] = useState([1, 2]);
	const [selectedKeys, setselectedKeys] = useState([1, 29, 42]);
	const [dataSourceOptions, setdataSourceOptions] = useState({});

	const [columnChooser, setcolumnChooser] = useState(true);
	const [headerFilter, setHeaderFilter] = useState(true);
	const [showBorders, setshowBorders] = useState(true);
	const [wordWrapEnabled, setwordWrapEnabled] = useState(true);
	const [columnAutoWidth, setcolumnAutoWidth] = useState(true);

	const [statuses, setstatuses] = useState([
		"Not Started",
		"Need Assistance",
		"In Progress",
		"Deferred",
		"Completed",
	]);
	useEffect(() => {
		if (tasks && employees) {
			console.log("초기화");
			setdataSourceOptions({
				store: tasks.map((task) => {
					employees.forEach((employee) => {
						if (task.Task_Assigned_Employee_ID === employee.ID) {
							task.Task_Assigned_Employee = employee;
						}
					});
					return task;
				}),
			});
		}
	}, [tasks, employees]);

	useEffect(() => {
		console.log("dataSourceOptions", dataSourceOptions);
	}, [dataSourceOptions]);

	/*
    데이터 예시
    > 트리 구조를 결정하는 것만 체크
    Task_Assigned_Employee: {ID: 1, Name: 'John Heart', Picture: 'images/employees/01.png'} // 일이 할당된 사람 정보
    Task_Assigned_Employee_ID: 1     // 일이 할당된 사람의 고유 ID
    Task_Completion: 75
    Task_Due_Date: "2015-04-15T00:00:00"
    Task_ID: 31                     // 일의 고유 ID
    Task_Parent_ID: 2               // 일의 부모 고유 ID (일 ID가 2번인곳 하위에 들어간다.)
    Task_Priority: 4
    Task_Start_Date: "2015-02-15T00:00:00"
    Task_Status: "In Progress"
    Task_Subject: "Choose between PPO and HMO Health Plan"

    Lookup

    Column 자식 태그로 사용
    Column 값이 1,2,3,4 -> Low, High 등 치환할 수 있음.

    ex) Task_Priority 는 정수형 1 ~ 4 의 값이 들어있고
    priorities 는 
    { id: 1, value: "Low" },
	{ id: 2, value: "Normal" },
	{ id: 3, value: "Urgent" },
	{ id: 4, value: "High" },
    과 같은 데이터(객체)가 들어있다.

    정수형 값을 id 로 매칭 시켜서 1 -> Low 로 변환 한다.
    */

	const propDatas = {
		expandedKeys,
		selectedKeys,
		dataSourceOptions,
		employees,
		statuses,
		priorities,

		columnChooser,
		setcolumnChooser,

		headerFilter,
		setHeaderFilter,
		showBorders,
		setshowBorders,
		wordWrapEnabled,
		setwordWrapEnabled,
		columnAutoWidth,
		setcolumnAutoWidth,
	};
	return <TreeListComponent {...propDatas} />;
};

export default TreeListContainer;
