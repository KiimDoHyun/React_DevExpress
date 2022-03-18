import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { URL } from "../Data";

const HeaderContainer = () => {
	const [name, setName] = useState([]);
	const [router, setRouter] = useState([]);
	useEffect(() => {
		if (URL) {
			setName(Object.keys(URL));
			setRouter(Object.values(URL));
		}
	}, []);

	const propDatas = {
		name,
		router,
	};
	return (
		<>
			<Header {...propDatas} />
		</>
	);
};

export default HeaderContainer;
