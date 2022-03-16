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
		<div style={{ margin: "0 10px" }}>
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
					name="border 활성화"
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
			</div>
			<Chart ref={chartRef}>
				<Size height={200} />
				<Tooltip enabled={true} customizeTooltip={customizeTooltip} />
				<CommonSeriesSettings type="bar" />
				<AdaptiveLayout width={450} />
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
				<FieldChooser enabled={true} height={400} />
			</PivotGrid>
		</div>
	);
};

export default PivotGridComponent;
