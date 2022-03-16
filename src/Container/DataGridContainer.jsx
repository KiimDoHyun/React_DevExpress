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
	const [allowColumnResizing, setallowColumnResizing] = useState(true);
	const pageSizes = [10, 25, 50, 100];

	const onContentReady = (e) => {
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
