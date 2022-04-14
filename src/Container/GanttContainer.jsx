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

	const onClickGetData = () => {
		console.log('task instance: ', reff.current)
		// 특정 task 의 정보를 출력한다.
		// key 값으로는 각 task 의 고유한 값인 id 값으로 찾는다. -> task 마다 id를 필수로 정해줘야 한다.
		// console.log(reff.current.instance.getTaskData(31))
		console.log('---------------------------------')
		console.log("Gantt 데이터 확인")
		// 모든 task 데이터
		console.log('task data: ', reff.current.instance['_tasks'])

		// 모든 task 데이터들의 연결 관계
		console.log('task dependencies data: ', reff.current.instance['_dependencies'])

		// resources 데이터
		console.log('task resources data: ', reff.current.instance['_resources'])

		// resourceAssignments 데이터
		console.log('task resourceAssignments data: ', reff.current.instance['_resourceAssignments'])

		console.log('---------------------------------')
	}
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
		onClickGetData,
	};
	return <GanttComponent {...propDatas} />;
};

export default GanttContainer;
