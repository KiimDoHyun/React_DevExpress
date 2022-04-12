import React, { useEffect, useRef } from "react";
import DiagramComponent from "../Components/DiagramComponent";
import "whatwg-fetch";
import jsonData from "../diagram-flow.json"; // 저장된 diagram 예시
const DiagramContainer = () => {
	const diagramRef = useRef();

	const onClick = () => {
		console.log(diagramRef)
		let ttt = diagramRef.current["_instance"].export();
		console.log("export result", ttt) // -> 현재 Diagram Data 추출
	}
	useEffect(() => {
		// 저장된 diagram 적용
		diagramRef.current["_instance"].import(JSON.stringify(jsonData));
	}, []);
	const propDatas = { diagramRef, onClick };
	return <DiagramComponent {...propDatas} />;
};

export default DiagramContainer;
