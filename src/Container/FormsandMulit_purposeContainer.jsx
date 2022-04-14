import React, { useEffect, useState } from "react";
import FormsandMulit_purposeComponent from "../Components/FormsandMulit_purposeComponent";
import { employee, positions, states } from "../Data";

const FormsandMulit_purposeContainer = () => {
	const [birthDateOptions, setBirthDateOptions] = useState({ width: "100%" });
	const [positionOptions, setPositionOptions] = useState({
		items: positions,
		// value: "",
	});
	const [stateOptions, setStateOptions] = useState({
		items: states,
	});
	const [phoneOptions, setPhoneOptions] = useState({
		mask: "=1 (000) 000-0000",
	});
	const [notesOptions, setNotesOptions] = useState({
		height: 140,
	});

	const [formData, setFormData] = useState(employee);

	const avatarRender = () => {
		return <div className="form-avatar"></div>;
	};

	// 값 변경
	const onchange = (e) => {
		const { dataField, value } = e;
		setFormData({
			...formData,
			[dataField]: value,
		});
	};

	// 엔터 누를때
	const onEditorEnterKey = (e) => {
		console.log("onEditorEnterKey");
		console.log(e);
	};

	// 데이터 확인
	const onsubmit = (e) => {
		console.log('e: ', e)
		console.log('formData: ', formData);
	};

	const propDatas = {
		employee,
		birthDateOptions,
		positionOptions,
		stateOptions,
		phoneOptions,
		notesOptions,
		formData,
		avatarRender,
		onchange,
		onEditorEnterKey,
		onsubmit,
	};
	return <FormsandMulit_purposeComponent {...propDatas} />;
};

export default FormsandMulit_purposeContainer;
