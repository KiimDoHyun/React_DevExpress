import React from "react";
import ResourceCell from "../../Components/Scheduler/ResourceCell";

const ResourceCellContainer = (props) => {
	const {
		data: {
			color,
			text,
			data: { avatar, age, discipline },
		},
	} = props;

	const propDatas = {
		color,
		text,
		avatar,
		age,
		discipline,
	};
	return <ResourceCell {...propDatas} />;
};

export default ResourceCellContainer;
