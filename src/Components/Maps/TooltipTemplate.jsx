import React from "react";

const TooltipTemplate = (props) => {
	const { info, gdpInfo, graphic } = props;
	return (
		<div>
			<h4>{info.attribute("name")}</h4>
			{gdpInfo}
			{graphic}
		</div>
	);
};

export default TooltipTemplate;
