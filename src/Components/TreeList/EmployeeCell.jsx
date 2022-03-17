import React from "react";

const EmployeeCell = (options) => {
	const employee = options.data.Task_Assigned_Employee;

	if (!employee) {
		return <span className="name">not assigned</span>;
	}

	return (
		<>
			<div
				className="img"
				style={{ backgroundImage: `url(${employee.Picture})` }}
			/>
			&nbsp;
			<span className="name">{employee.Name}</span>
		</>
	);
};

export default EmployeeCell;
