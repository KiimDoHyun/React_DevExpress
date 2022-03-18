import React from "react";
import CircularGauge, {
	Geometry,
	Scale,
	Size,
	ValueIndicator,
} from "devextreme-react/circular-gauge";
const Indicator = (props) => {
	const {
		value,
		inverted,
		startAngle,
		color,
		endAngle,
		theme,
		containerBackgroundColor,
	} = props;
	return (
		<CircularGauge
			value={value}
			containerBackgroundColor={containerBackgroundColor}
			theme={theme}
		>
			<Size width={90} height={90} />
			<Scale
				startValue={inverted ? 100 : 0}
				endValue={inverted ? 0 : 100}
				tickInterval={50}
			/>
			<Geometry startAngle={startAngle} endAngle={endAngle} />
			<ValueIndicator color={color} />
		</CircularGauge>
	);
};

export default Indicator;
