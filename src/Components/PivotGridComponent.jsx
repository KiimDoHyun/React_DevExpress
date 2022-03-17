import React from "react";
import Chart, {
	AdaptiveLayout,
	CommonSeriesSettings,
	Size,
	Tooltip,
} from "devextreme-react/chart";
import PivotGrid, { FieldChooser } from "devextreme-react/pivot-grid";
import InputCheck from "./InputCheck";
const PivotGridComponent = (props) => {
	const {
		dataSource,
		chartRef,
		pivotGridRef,
		allowSortingBySummary,
		setallowSortingBySummary,

		allowFiltering,
		setallowFiltering,
		showBorders,
		setshowBorders,
		showColumnTotals,
		setshowColumnTotals,
		showColumnGrandTotals,
		setshowColumnGrandTotals,
		showRowTotals,
		setshowRowTotals,
		showRowGrandTotals,
		setshowRowGrandTotals,
		fieldChooser,
		setfieldChooser,
		tooltip,
		setTooltip,
	} = props;
	function customizeTooltip(args) {
		const valueText = currencyFormatter.format(args.originalValue);
		return {
			html: `${args.seriesName} | Total<div class="currency">${valueText}</div>`,
		};
	}
	const currencyFormatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	});
	return (
		<div className="Container">
			<h3>PivotGrid</h3>
			<div className="options">
				<InputCheck
					name="allowSortingBySummary"
					value={allowSortingBySummary}
					setValue={setallowSortingBySummary}
				/>
				<InputCheck
					name="allowFiltering"
					value={allowFiltering}
					setValue={setallowFiltering}
				/>
				<InputCheck
					name="showBorders"
					value={showBorders}
					setValue={setshowBorders}
				/>
				<InputCheck
					name="showColumnTotals"
					value={showColumnTotals}
					setValue={setshowColumnTotals}
				/>
				<InputCheck
					name="showColumnGrandTotals"
					value={showColumnGrandTotals}
					setValue={setshowColumnGrandTotals}
				/>
				<InputCheck
					name="showRowTotals"
					value={showRowTotals}
					setValue={setshowRowTotals}
				/>
				<InputCheck
					name="showRowGrandTotals"
					value={showRowGrandTotals}
					setValue={setshowRowGrandTotals}
				/>
				<InputCheck
					name="fieldChooser"
					value={fieldChooser}
					setValue={setfieldChooser}
				/>
				<InputCheck name="tooltip" value={tooltip} setValue={setTooltip} />
			</div>
			<Chart ref={chartRef}>
				<Size height={200} />
				<Tooltip enabled={tooltip} customizeTooltip={customizeTooltip} />
				<CommonSeriesSettings type="bar" />
				<AdaptiveLayout width={450} />
				{/* 지정한 크기 (width) 보다 작으면 차크만 남고 나머진 숨김 */}
			</Chart>

			<PivotGrid
				id="pivotgrid"
				dataSource={dataSource}
				allowSortingBySummary={allowSortingBySummary} // 피봇 그리드를 필드 값 대신 요약된 값으로 정렬 할수 있게 하는 기능 ?
				allowFiltering={allowFiltering}
				showBorders={showBorders}
				showColumnTotals={showColumnTotals}
				showColumnGrandTotals={showColumnGrandTotals}
				showRowTotals={showRowTotals}
				showRowGrandTotals={showRowGrandTotals}
				ref={pivotGridRef}
			>
				<FieldChooser enabled={fieldChooser} height={400} />
			</PivotGrid>
		</div>
	);
};

export default PivotGridComponent;
