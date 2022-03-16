import React from "react";

const InputCheck = ({ name = "Option", value, setValue }) => {
	return (
		<>
			<input
				id={name + new Date().getMilliseconds()}
				type="checkbox"
				checked={value}
				onChange={() => setValue(!value)}
			/>
			<label htmlFor={name + new Date().getMilliseconds()}>{name}</label>
		</>
	);
};

export default InputCheck;
