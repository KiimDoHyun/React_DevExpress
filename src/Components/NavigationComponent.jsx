import React from "react";
import "../Style/Navigation.css";
import TreeView from "devextreme-react/tree-view";

const NavigationComponent = (props) => {
	const { continents, handleTreeViewSelectionChange } = props;
	return (
		<div className="Container">
			<h3>Navigation</h3>
			<div className="options"></div>
			<TreeView
				dataSource={continents}
				selectionMode="single"
				selectByClick={true}
				onItemSelectionChanged={handleTreeViewSelectionChange}
			/>
		</div>
	);
};

export default NavigationComponent;
