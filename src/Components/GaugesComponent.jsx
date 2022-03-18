import React from "react";
import CircularGauge, {
	Geometry,
	Scale as CircularScale,
	Size as CircularSize,
	ValueIndicator as CircularValueIndicator,
} from "devextreme-react/circular-gauge";
import LinearGauge, {
	Label,
	MinorTick,
	Scale as LinearScale,
	Size as LinearSize,
	ValueIndicator as LinearValueIndicator,
} from "devextreme-react/linear-gauge";
import ColorBox from "devextreme-react/color-box";

import Slider from "devextreme-react/slider";
import Indicator from "./Gauges/Indicator";
import "../Style/Gauges.css";

const GaugesComponent = (props) => {
	const {
		color,
		speedValue,
		handleSpeedChange,
		handleColorChange,
		themeArr,
		theme,
		containerBackgroundColor,
		onChangecontainerBackgroundColor,
		onChangeTheme,
	} = props;
	return (
		// 각도는 정중앙 아래가 0도, 시계방향으로 증가함.
		<div className="Container">
			<h3>Gauges</h3>
			<div className="options">
				<div>color</div>
				<div>
					<ColorBox
						value={color}
						applyValueMode="instantly"
						onValueChanged={handleColorChange}
					/>
				</div>

				<label>theme</label>
				<select value={theme} onChange={onChangeTheme}>
					{themeArr.map((item, idx) => {
						return (
							<option value={item} key={idx}>
								{item}
							</option>
						);
					})}
				</select>

				<div>containerBackgroundColor</div>
				<div>
					<ColorBox
						value={containerBackgroundColor}
						applyValueMode="instantly"
						onValueChanged={onChangecontainerBackgroundColor}
					/>
				</div>
			</div>
			<div id="gauge-demo">
				<div id="gauge-container">
					<div className="left-section">
						{/* 좌상단 게이지 */}
						<Indicator
							value={speedValue / 2}
							inverted={true} // 눈금 회전 방향 조절
							startAngle={180}
							endAngle={90}
							color={color} // 눈금 색상
							theme={theme}
							containerBackgroundColor={containerBackgroundColor}
						/>
						{/* 좌하단 게이지 */}
						<Indicator
							value={speedValue / 2}
							inverted={true}
							startAngle={-90}
							endAngle={-180}
							color={color}
							theme={theme}
							containerBackgroundColor={containerBackgroundColor}
						/>
					</div>
					&nbsp;
					<div className="center-section">
						{/* 원형 게이지 */}
						<CircularGauge
							value={speedValue}
							theme={theme}
							containerBackgroundColor={containerBackgroundColor}
						>
							{/* 눈금 크기 설정 */}
							<CircularSize width={260} />

							{/* 눈금 간격 설정 */}
							<CircularScale
								startValue={20} // 시작
								endValue={200} //  종료
								tickInterval={20} // 간격
								minorTickInterval={10} // 작은 간격
							/>

							{/* 눈금 길이 설정 (시작, 종료 각으로 조절)*/}
							<Geometry startAngle={225} endAngle={315} />

							{/* 바늘 설정 */}
							{/* 바늘 분리형 */}
							<CircularValueIndicator
								type="twoColorNeedle"
								secondFraction={0.2}
								color={true ? color : "none"}
								secondColor="black"
							/>
						</CircularGauge>

						{/* 예시에서 추가한 임의의 항목 (무시) */}
						<div className="speed-value">
							<span>{speedValue}</span>
						</div>

						{/* 선 게이지 */}
						<LinearGauge value={50 - speedValue * 0.24} id="fuel-gauge">
							<LinearSize width={90} height={20} />
							<LinearScale
								startValue={0}
								endValue={50}
								tickInterval={25}
								minorTickInterval={12.5}
							>
								<MinorTick visible={false} />
								<Label visible={false} />
							</LinearScale>
							<LinearValueIndicator size={8} offset={7} color={color} />
						</LinearGauge>
					</div>
					&nbsp;
					<div className="right-section">
						{/* 우상단 게이지 */}
						<Indicator
							value={speedValue / 2}
							inverted={true}
							startAngle={90}
							endAngle={0}
							color={color}
							theme={theme}
							containerBackgroundColor={containerBackgroundColor}
						/>
						{/* 우하단 게이지 */}
						<Indicator
							value={speedValue / 2}
							inverted={false}
							startAngle={0}
							endAngle={-90}
							color={color}
							theme={theme}
							containerBackgroundColor={containerBackgroundColor}
						/>
					</div>
				</div>

				<Slider
					value={speedValue}
					onValueChanged={handleSpeedChange}
					width={155}
					min={0}
					max={200}
					id="slider"
				/>
			</div>
		</div>
	);
};

export default GaugesComponent;
