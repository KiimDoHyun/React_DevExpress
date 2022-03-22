import React from "react";
import "../Style/DialogsAndNotification.css";

import Popup from "devextreme-react/popup";
import HouseContainer from "../Container/DialogsAndNotification/HouseContainer";
import InputCheck from "./InputCheck";

const DialogsAndNotificationsComponent = (props) => {
	const {
		housesSource,
		currentHouse,
		popupVisible,
		handlePopupHidden,
		showHouse,
		renderPopup,
		dragEnabled,
		setDragEnabled,
	} = props;
	return (
		<div className="Container">
			<h3>Dialogs And Notifications</h3>
			<div className="options">
				<InputCheck
					name="dragEnabled"
					value={dragEnabled}
					setValue={setDragEnabled}
				/>
			</div>
			<div className="images">
				{housesSource.map((h) => (
					<HouseContainer house={h} show={showHouse} key={h.ID} />
				))}
				<Popup
					width={660}
					height={540}
					showTitle={true}
					title={currentHouse.Address}
					dragEnabled={dragEnabled}
					closeOnOutsideClick={true}
					visible={popupVisible}
					onHiding={handlePopupHidden}
					contentRender={renderPopup}
				/>
			</div>
		</div>
	);
};

export default DialogsAndNotificationsComponent;
