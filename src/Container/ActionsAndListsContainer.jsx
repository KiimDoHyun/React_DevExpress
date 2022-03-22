import React, { useEffect, useMemo, useState } from "react";
import ActionsAndListsComponent from "../Components/ActionsAndListsComponent";
import ArrayStore from "devextreme/data/array_store";
import { AaLdata as data } from "../Data";

const ActionsAndListsContainer = () => {
	const dataSourceOptions = useMemo(() => {
		return {
			store: new ArrayStore({
				data,
				key: "Id",
			}), // 데이터
			group: "City", // 그룹 범위
			searchExpr: ["Hotel_Name", "City", "Address"], // 검색 범위
		};
	}, []);

	const listAttrs = { class: "list" };
	const tileViewAttrs = { class: "tile" };
	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format;

	const [currentHotel, setCurrentHotel] = useState(data[0]);
	const [selectedItemKeys, setSelectedItemKeys] = useState([data[0].Id]);
	const [searchEnabled, setSearchEnabled] = useState(true);

	const selectionModeArr = ["all", "multiple", "none", "single"];
	const [currentSelectionMode, setCurrentSelectionMode] = useState("single");
	const onChangeCurrentSelectionMode = ({ value }) => {
		setCurrentSelectionMode(value);
	};

	const renderTile = (item) => {
		return (
			<div
				className="tile-image"
				style={{ backgroundImage: `url(images/hotels/${item.FileName})` }}
			/>
		);
	};

	const handleListSelectionChange = (e) => {
		console.log("e", e);
		// 값이 바뀔때 mode 가 single 인 경우만 함수가 작동하도록 변경.
		if (currentSelectionMode === "single") {
			const targetItem = e.addedItems[0];
			setCurrentHotel(targetItem);
			setSelectedItemKeys([targetItem.Id]);
		}
	};
	const renderListGroup = (group) => {
		return <div className="city">{group.key}</div>;
	};

	const renderListItem = (item) => {
		return (
			<div>
				<div className="hotel">
					<div className="name">{item.Hotel_Name}</div>
					<div className="address">{`${item.Postal_Code}, ${item.Address}`}</div>
					<div className={`type ${item.Hotel_Class.toLowerCase()}`} />
				</div>
				<div className="price-container">
					<div className="price">{formatCurrency(item.Price)}</div>
					&nbsp;
					<div className="caption">
						per
						<br />
						night
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		console.log("selectedItemKeys: ", selectedItemKeys);
		console.log("dataSourceOptions: ", dataSourceOptions);
	}, [selectedItemKeys]);

	useEffect(() => {
		console.log("currentSelectionMode: ", currentSelectionMode);
	}, [currentSelectionMode]);
	const propDatas = {
		currentHotel,
		renderTile,
		dataSourceOptions,
		listAttrs,
		tileViewAttrs,
		formatCurrency,
		selectedItemKeys,
		handleListSelectionChange,
		renderListGroup,
		renderListItem,
		selectionModeArr,
		currentSelectionMode,
		onChangeCurrentSelectionMode,
		searchEnabled,
		setSearchEnabled,
	};
	return <ActionsAndListsComponent {...propDatas} />;
};

export default ActionsAndListsContainer;
