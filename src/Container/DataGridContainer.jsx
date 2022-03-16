import React, { useEffect, useState } from "react";
import DataGridComponent from "../Components/DataGridComponent";
import ODataStore from "devextreme/data/odata/store";

const DataGridContainer = () => {
	const [dataSourceOptions, setDataSourceOptions] = useState(null);
	const [collapsed, setCollapsed] = useState(false);
	// const [onContentReady, setOnContentReady] = useState(null);

	// 옵션

	const [allowColumnReordering, setallowColumnReordering] = useState(true);
	const [rowAlternationEnabled, setrowAlternationEnabled] = useState(true);
	const [showBorders, setshowBorders] = useState(true);
	const pageSizes = [10, 25, 50, 100];

	const onContentReady = (e) => {
		console.log(e);
		if (!collapsed) {
			e.component.expandRow(["EnviroCare"]);
			setCollapsed(true);
		}
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

		// setOnContentReady((e) => {
		// 	console.log(e);
		// 	// if (!collapsed) {
		// 	// 	e.component.expandRow(["EnviroCare"]);
		// 	// 	setCollapsed(true);
		// 	// }
		// });
	}, []);

	useEffect(() => {
		console.log(collapsed);
	}, [collapsed]);

	const propDatas = {
		dataSourceOptions,
		allowColumnReordering,
		rowAlternationEnabled,
		showBorders,
		pageSizes,

		onContentReady,
	};
	return (
		<>
			<DataGridComponent {...propDatas} />
		</>
	);
};

export default DataGridContainer;
