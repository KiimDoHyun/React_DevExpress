import React from "react";

const DataCell = (props) => {
	const { dayClasses, employeeClasses, text } = props;
	return (
		<>
			{employeeClasses && dayClasses ? (
				<div className={employeeClasses.join(" ")}>
					<div className={dayClasses.join(" ")}>{text}</div>
				</div>
			) : null}
		</>
	);
};

export default DataCell;
