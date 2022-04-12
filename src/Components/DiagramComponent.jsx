import React from "react";
import Diagram from "devextreme-react/diagram";

const DiagramComponent = (props) => {
	const { diagramRef, onClick } = props;
	return (
		<div className="Container">
			<h3>Diagram</h3>
			<div className="options">
				<button onClick={onClick}>export Json</button>
			</div>
			<Diagram id="diagram" ref={diagramRef}/>
		</div>
	);
};

export default DiagramComponent;
