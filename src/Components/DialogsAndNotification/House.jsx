import React from "react";
import Popover from "devextreme-react/popover";

const House = (props) => {
	const { renderAgentDetails, show_mainFunc, house, position, formatCurrency } =
		props;
	return (
		<div>
			<div onClick={show_mainFunc} className="item-content">
				{/* <img src={house.Image} /> */}
				<div
					style={{
						width: "100%",
						height: "220px",
						backgroundColor: "#d9d9d9",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<p style={{ fontSize: "15px", color: "black" }}>No Img</p>
				</div>

				<div className="item-options">
					<div>
						<div className="address">{house.Address}</div>
						<div className="price large-text">
							{formatCurrency(house.Price)}
						</div>
						<div className="agent">
							<div id={`house${house.ID}`}>
								<img src="images/icon-agent.svg" />
								Listing agent
							</div>
						</div>
					</div>
				</div>
				<Popover
					showEvent="mouseenter"
					hideEvent="mouseleave"
					position={position}
					target={`#house${house.ID}`}
					width={260}
					contentRender={renderAgentDetails}
				/>
			</div>
		</div>
	);
};

export default House;
