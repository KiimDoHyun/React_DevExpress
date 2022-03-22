import React from "react";

import Map, {
	Export,
	Label,
	Layer,
	Legend,
	Source,
	Subtitle,
	Title,
	Tooltip,
	Size,
} from "devextreme-react/vector-map";
import TooltipTemplateContainer from "../Container/Maps/TooltipTemplateContainer";
const MapsComponent = (props) => {
	const {
		mapBounds,
		mapsData,
		colorGroups,
		customizeLegendText,
		customizeLayer,
	} = props;
	return (
		<div className="Container">
			<h3>Maps</h3>
			<div className="options"></div>
			<Map bounds={mapBounds}>
				<Size height={500} />
				<Layer
					name="areas"
					dataSource={mapsData.world}
					colorGroups={colorGroups}
					colorGroupingField="total"
					customize={customizeLayer}
				>
					<Label dataField="name" enabled={true} />
				</Layer>
				<Tooltip enabled={true} contentRender={TooltipTemplateContainer} />
				<Legend customizeText={customizeLegendText}>
					<Source layer="areas" grouping="color" />
				</Legend>
				<Title text="Nominal GDP">
					<Subtitle text="(in millions of US dollars)" />
				</Title>
				<Export enabled={true} />
			</Map>
		</div>
	);
};

export default MapsComponent;
