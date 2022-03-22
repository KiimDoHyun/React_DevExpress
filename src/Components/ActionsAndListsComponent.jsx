import React from "react";
import List from "devextreme-react/list";
import TileView from "devextreme-react/tile-view";
import "../Style/ActionsAndList.css";
import { SelectBox } from "devextreme-react";
import InputCheck from "./InputCheck";
const ActionsAndListsComponent = (props) => {
	const {
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
	} = props;
	return (
		<div className="Container">
			<h3>ActionsAndLists</h3>
			<div className="options">
				{/* <label>currentSelectionMode</label>
                <select value={currentSelectionMode}>
                    {selectionModeArr.map((item, idx) => {
                        return <option value={item} key={idx}>{item}</option>
                    })}
                </select> */}
				<SelectBox
					value={currentSelectionMode}
					onValueChanged={onChangeCurrentSelectionMode}
					items={selectionModeArr}
				/>
				<InputCheck
					name="searchEnabled"
					value={searchEnabled}
					setValue={setSearchEnabled}
				/>
			</div>
			<React.Fragment>
				<div className="left">
					<List
						selectionMode={currentSelectionMode}
						dataSource={dataSourceOptions}
						grouped={true}
						searchEnabled={searchEnabled}
						selectedItemKeys={selectedItemKeys}
						onSelectionChanged={handleListSelectionChange}
						// 커스텀 요소들
						itemRender={renderListItem}
						groupRender={renderListGroup}
						elementAttr={listAttrs}
					/>
				</div>

				<div className="right">
					<div className="header">
						<div className="name-container">
							<div className="AaLname">{currentHotel.Hotel_Name}</div>
							<div
								className={`type ${currentHotel.Hotel_Class.toLowerCase()}`}
							/>
						</div>
						<div className="price-container">
							<div className="price">{formatCurrency(currentHotel.Price)}</div>
							&nbsp;
							<div className="caption">
								per
								<br />
								night
							</div>
						</div>
					</div>

					<TileView
						dataSource={currentHotel.Images}
						height={224}
						baseItemHeight={100}
						baseItemWidth={137}
						itemMargin={12}
						noDataText=""
						itemRender={renderTile}
						elementAttr={tileViewAttrs}
					/>

					<div className="address">
						{currentHotel.Postal_Code}, {currentHotel.Address}
					</div>
					<div className="description">{currentHotel.Description}</div>
				</div>
			</React.Fragment>
		</div>
	);
};

export default ActionsAndListsComponent;
