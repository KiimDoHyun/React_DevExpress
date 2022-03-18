import React from "react";

const EmployeeCell = (options) => {
	const employee = options.data.Task_Assigned_Employee;

	if (!employee) {
		return <span className="TLname">not assigned</span>;
	}

	return (
		<>
			<div
				className="TLimg"
				style={{ backgroundImage: `url(${employee.Picture})` }}
			/>
			&nbsp;
			<span className="TLname">{employee.Name}</span>
		</>
	);
};

export default EmployeeCell;
