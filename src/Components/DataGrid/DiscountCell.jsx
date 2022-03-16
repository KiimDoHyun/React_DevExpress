import React from "react";
import Bullet, { Font, Margin, Size, Tooltip } from "devextreme-react/bullet";

const DiscountCell = (cellData) => {
	function customizeTooltip(data) {
		return {
			text: `${parseInt(data.value, 10)}%`,
		};
	}

	return (
		<Bullet
			showTarget={false}
			showZeroLevel={true}
			value={cellData.value * 100}
			startScaleValue={0}
			endScaleValue={100}
		>
			{/* 바 크기 */}
			<Size width={150} height={35} />
			{/* Column 내부에서 마진 */}
			<Margin top={5} bottom={0} left={5} />
			{/* 마우스 호버 했을때 나오는 툴팁 */}
			<Tooltip
				enabled={true}
				paddingTopBottom={2}
				zIndex={5}
				customizeTooltip={customizeTooltip}
			>
				<Font size={18} />
			</Tooltip>
		</Bullet>
	);
};

export default DiscountCell;
