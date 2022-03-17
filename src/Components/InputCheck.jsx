import React from "react";

const InputCheck = ({ name = "Option", value, setValue }) => {
	return (
		<div className="options_component">
			<input
				id={name + new Date().getMilliseconds()}
				type="checkbox"
				checked={value}
				onChange={() => setValue(!value)}
			/>
			<label htmlFor={name + new Date().getMilliseconds()}>{name}</label>
		</div>
	);
};

export default InputCheck;
