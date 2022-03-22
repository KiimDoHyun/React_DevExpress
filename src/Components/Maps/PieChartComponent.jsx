import React from "react";
import PieChart, {
	Series,
	Label,
	Legend,
	Connector,
} from "devextreme-react/pie-chart";
const PieChartComponent = (props) => {
	const { data, customizeText } = props;
	return (
		<PieChart id="gdp-sectors" dataSource={data} animation={false}>
			<Series argumentField="name" valueField="value">
				<Label visible={true} customizeText={customizeText}>
					<Connector visible={true} width={1}></Connector>
				</Label>
			</Series>
			<Legend visible={false}></Legend>
		</PieChart>
	);
};

export default PieChartComponent;
