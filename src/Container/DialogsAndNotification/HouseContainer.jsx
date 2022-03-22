import React from "react";
import House from "../../Components/DialogsAndNotification/House";

const HouseContainer = (props) => {
	const { house, show } = props;
	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format;
	const position = {
		offset: "0, 2",
		at: "bottom",
		my: "top",
		collision: "fit flip",
	};

	const renderAgentDetails = () => {
		const agent = house.Agent;
		return (
			<div className="agent-details">
				<img src={agent.Picture} />
				<div>
					<div className="name large-text">{agent.Name}</div>
					<div className="phone">Tel: {agent.Phone}</div>
				</div>
			</div>
		);
	};

	const show_mainFunc = () => {
		show(house);
	};

	const propDatas = {
		renderAgentDetails,
		show_mainFunc,
		house,
		position,
		formatCurrency,
	};
	return <House {...propDatas} />;
};

export default HouseContainer;
