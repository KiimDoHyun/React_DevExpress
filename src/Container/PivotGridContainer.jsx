import React, { useEffect, useMemo, useRef, useState } from "react";
import PivotGridComponent from "../Components/PivotGridComponent";
import { sales } from "../Data";
import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";

const PivotGridContainer = () => {
	const dataSource = useMemo(() => {
		return new PivotGridDataSource({
			fields: [
				{
					caption: "Region",
					width: 120,
					dataField: "region",
					area: "row",
					sortBySummaryField: "Total",
				},
				{
					caption: "City",
					dataField: "city",
					width: 150,
					area: "row",
				},
				{
					dataField: "date",
					dataType: "date",
					area: "column",
				},
				{
					groupName: "date",
					groupInterval: "month",
					visible: false,
				},
				{
					caption: "Total",
					dataField: "amount",
					dataType: "number",
					summaryType: "sum",
					format: "currency",
					area: "data",
				},
			],
			store: sales,
		});
	}, []);
	// const dataSource = new PivotGridDataSource({
	// 	fields: [
	// 		{
	// 			caption: "Region",
	// 			width: 120,
	// 			dataField: "region",
	// 			area: "row",
	// 			sortBySummaryField: "Total",
	// 		},
	// 		{
	// 			caption: "City",
	// 			dataField: "city",
	// 			width: 150,
	// 			area: "row",
	// 		},
	// 		{
	// 			dataField: "date",
	// 			dataType: "date",
	// 			area: "column",
	// 		},
	// 		{
	// 			groupName: "date",
	// 			groupInterval: "month",
	// 			visible: false,
	// 		},
	// 		{
	// 			caption: "Total",
	// 			dataField: "amount",
	// 			dataType: "number",
	// 			summaryType: "sum",
	// 			format: "currency",
	// 			area: "data",
	// 		},
	// 	],
	// 	store: sales,
	// });
	const chartRef = useRef();
	const pivotGridRef = useRef();

	const [allowSortingBySummary, setallowSortingBySummary] = useState(true);
	const [allowFiltering, setallowFiltering] = useState(true);
	const [showBorders, setshowBorders] = useState(true);
	const [showColumnTotals, setshowColumnTotals] = useState(true);
	const [showColumnGrandTotals, setshowColumnGrandTotals] = useState(true);
	const [showRowTotals, setshowRowTotals] = useState(true);
	const [showRowGrandTotals, setshowRowGrandTotals] = useState(true);
	const [fieldChooser, setfieldChooser] = useState(true);
	const [tooltip, setTooltip] = useState(true);

	useEffect(() => {
		pivotGridRef.current["_instance"].bindChart(chartRef.current["_instance"], {
			dataFieldsDisplayMode: "splitPanes",
			alternateDataFields: false,
		});

		setTimeout(() => {
			dataSource.expandHeaderItem("row", ["North America"]);
			dataSource.expandHeaderItem("column", [2013]);
		});
	}, [dataSource]);
	const propDatas = {
		dataSource,
		chartRef,
		pivotGridRef,

		allowSortingBySummary,
		setallowSortingBySummary,
		allowFiltering,
		setallowFiltering,
		showBorders,
		setshowBorders,
		showColumnTotals,
		setshowColumnTotals,
		showColumnGrandTotals,
		setshowColumnGrandTotals,
		showRowTotals,
		setshowRowTotals,
		showRowGrandTotals,
		setshowRowGrandTotals,
		fieldChooser,
		setfieldChooser,
		tooltip,
		setTooltip,
	};
	return <PivotGridComponent {...propDatas} />;
};

export default PivotGridContainer;
