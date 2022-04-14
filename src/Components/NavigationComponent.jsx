import React from "react";
import "../Style/Navigation.css";
import TreeView from "devextreme-react/tree-view";
import InputCheck from "./InputCheck";
import { SelectBox } from "devextreme-react";

const NavigationComponent = (props) => {
	const { 		
		continents, 
		handleTreeViewSelectionChange, 
		selectByClick, 
		setselectByClick,
		selectionMode, 
		selectionModeArr,
		onChangeSeletionModeSelect
	} = props;
	return (
		<div className="Container">
			<h3>Navigation</h3>
			<div className="options">
				<InputCheck
					name="selectByClick"
					value={selectByClick}
					setValue={setselectByClick}
				/>
				<label>selectionMode</label>
				<SelectBox
					value={selectionMode}
					onValueChanged={onChangeSeletionModeSelect}
					items={selectionModeArr}
				/>
			</div>
			<TreeView
				dataSource={continents}
				selectionMode={selectionMode}
				selectByClick={selectByClick}
				onItemSelectionChanged={handleTreeViewSelectionChange}
			/>
		</div>
	);
};

export default NavigationComponent;
