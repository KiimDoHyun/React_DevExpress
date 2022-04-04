import React, { useEffect, useState } from "react";
import DataGridComponent from "../Components/DataGridComponent";
import ODataStore from "devextreme/data/odata/store";

const DataGridContainer = () => {
	const [dataSourceOptions, setDataSourceOptions] = useState(null);
	const [collapsed, setCollapsed] = useState(false);
	// const [onContentReady, setOnContentReady] = useState(null);

	const [allowColumnReordering, setallowColumnReordering] = useState(true);
	const [rowAlternationEnabled, setrowAlternationEnabled] = useState(true);
	const [showBorders, setshowBorders] = useState(true);
	const [allowColumnResizing, setallowColumnResizing] = useState(true);
	const pageSizes = [10, 25, 50, 100];

	const onContentReady = (e) => {
		console.log('e',e)
		if (!collapsed) {
			e.component.expandRow(["EnviroCare"]);
			setCollapsed(true);
		} //expandRow -> 특정 기준으로 정렬된 row 중 하나를 펼치는것. 안펼쳐짐 이유 모르겠음
		/*
		state 변수 collapsed 가 쓰이는 곳은 없음
		실제 예제에도 마찬가지
		한번만 수행하도록 하기위해 사용하는듯?
		*/
	};
	useEffect(() => {
		setDataSourceOptions({
			store: new ODataStore({
				url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
				key: "Id",
				beforeSend(request) {
					request.params.startDate = "2020-05-10";
					request.params.endDate = "2020-05-15";
				},
			}),
		});
	}, []);

	const propDatas = {
		dataSourceOptions,
		allowColumnReordering,
		rowAlternationEnabled,
		showBorders,
		pageSizes,
		allowColumnResizing,

		setallowColumnResizing,
		setallowColumnReordering,
		setrowAlternationEnabled,
		onContentReady,
		setshowBorders,
	};
	return (
		<>
			<DataGridComponent {...propDatas} />
		</>
	);
};

export default DataGridContainer;
