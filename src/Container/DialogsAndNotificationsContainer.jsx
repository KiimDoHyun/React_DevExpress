import React, { useEffect, useState } from "react";
import DialogsAndNotificationsComponent from "../Components/DialogsAndNotificationsComponent";
import { housesSource } from "../Data";
import Button from "devextreme-react/button";
import notify from "devextreme/ui/notify";

const DialogsAndNotificationsContainer = () => {
	const ADD_TO_FAVORITES = "Add to Favorites";
	const REMOVE_FROM_FAVORITES = "Remove from Favorites";
	const favButtonAttrs = {
		class: "favorites",
	};

	const [currentHouse, setCurrentHouse] = useState(housesSource[0]);
	const [popupVisible, setPopupVisible] = useState(false);

	const [dragEnabled, setDragEnabled] = useState(false);

	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format;

	const renderPopup = () => {
		return (
			<div className="popup-property-details">
				<div className="large-text">{formatCurrency(currentHouse.Price)}</div>
				<div className="opacity">
					{currentHouse.Address}, {currentHouse.City}, {currentHouse.State}
				</div>
				<Button
					icon="favorites"
					text={
						currentHouse.Favorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES
					}
					width={210}
					height={44}
					elementAttr={favButtonAttrs}
					onClick={changeFavoriteState}
				/>
				<div className="images">
					<img src={currentHouse.Image} />
					<img src={currentHouse.Image.replace(".jpg", "b.jpg")} />
				</div>
				<div>{currentHouse.Features}</div>
			</div>
		);
	};

	const showHouse = (house) => {
		setCurrentHouse(house);
		setPopupVisible(true);
	};

	const handlePopupHidden = () => {
		setPopupVisible(false);
	};

	const changeFavoriteState = () => {
		setCurrentHouse({
			...currentHouse,
			Favorite: !currentHouse.Favorite,
		});

		renderPopup();

		notify(
			{
				message: `This item has been ${
					currentHouse.Favorite ? "added to" : "removed from"
				} the Favorites list!`,
				width: 450,
			},
			currentHouse.Favorite ? "success" : "error",
			2000
		);
	};
	useEffect(() => {
		console.log("popupVisible", popupVisible);
	}, [popupVisible]);
	const propDatas = {
		housesSource,
		currentHouse,
		popupVisible,
		handlePopupHidden,
		showHouse,
		renderPopup,
		dragEnabled,
		setDragEnabled,
	};
	return <DialogsAndNotificationsComponent {...propDatas} />;
};

export default DialogsAndNotificationsContainer;
