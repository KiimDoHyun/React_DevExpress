import React, { useEffect, useRef } from "react";
import DiagramComponent from "../Components/DiagramComponent";
import "whatwg-fetch";

const DiagramContainer = () => {
	const diagramRef = useRef();

	useEffect(() => {
		const diagram = diagramRef.current["_instance"];
		// console.log(diagram);

		fetch("../diagram-flow.json")
			.then((response) => response.json())
			.then((json) => {
				diagram.import(JSON.stringify(json));
			})
			.catch(() => {
				throw new Error("Data Loading Error");
			});
	}, []);
	const propDatas = { diagramRef };
	return <DiagramComponent {...propDatas} />;
};

export default DiagramContainer;
