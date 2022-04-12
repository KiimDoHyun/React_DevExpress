import React from "react";
import Chart, {
	ArgumentAxis,
	CommonSeriesSettings,
	Legend,
	Series,
	Tooltip,
	ValueAxis,
	ConstantLine,
	Label,
} from "devextreme-react/chart";
const ChartsComponent = (props) => {
	const {
		customizePercentageText,
		customizeTooltip,
		dataArray,
		paletteArr,
		palette,
		onChangePalette,
		overlappingBehaviorArr,
		overlappingBehavior,
		onChangeoverlappingBehavior,
	} = props;
	return (
		<div className="Container">
			<h3>Chart</h3>
			<div className="options">
				<label>palette</label>
				<select value={palette} onChange={onChangePalette}>
					{paletteArr.map((item, idx) => {
						return (
							<option key={idx} value={item}>
								{item}
							</option>
						);
					})}
				</select>

				<label>overlappingBehavior</label>
				<select
					value={overlappingBehavior}
					onChange={onChangeoverlappingBehavior}
				>
					{overlappingBehaviorArr.map((item, idx) => {
						return (
							<option key={idx} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</div>
			<Chart
				title="Pizza Shop Complaints"
				dataSource={dataArray}
				palette={palette}
				id="chart"
				// rotated={false}
			>
				<CommonSeriesSettings argumentField="complaint" />
				<Series
					name="Complaint frequency"
					valueField="count"
					axis="frequency"
					type="bar"
					// color="#fac29a" -> 여기서 색상을 지정하면 palette 는 무시함.
				/>
				<Series
					name="Cumulative percentage"
					valueField="cumulativePercentage"
					axis="percentage"
					type="spline"
					// color="#6b71c3"
				/>

				{/* 축 (차트 하단에 보여짐) */}
				{/* 
                overlappingBehavior: 차트가 작아져서 하단 축 값을 보여줄 공간이 부족할때
                어떻게 보여줄지 결정
                */}
				<ArgumentAxis>
					<Label overlappingBehavior={overlappingBehavior} />
				</ArgumentAxis>

				{/* 축 (차트 좌우에 보여짐)*/}
				<ValueAxis name="frequency" position="left" tickInterval={300} />
				<ValueAxis
					name="percentage"
					position="right"
					tickInterval={20}
					showZero={true}
					valueMarginsEnabled={false}
				>
					{/* 라벨 커스터마이징 */}
					<Label customizeText={customizePercentageText} />
					{/* 현재 축을 기준으로 특정 값에 '라인'을 설정  */}
					<ConstantLine value={80} width={2} color="#fc3535" dashStyle="dash">
						<Label visible={false} />
					</ConstantLine>
				</ValueAxis>

				<Tooltip
					enabled={true}
					shared={true}
					customizeTooltip={customizeTooltip}
				/>

				{/* 차트 범례 위치 조정*/}
				<Legend verticalAlignment="top" horizontalAlignment="center" />
			</Chart>
		</div>
	);
};

export default ChartsComponent;
