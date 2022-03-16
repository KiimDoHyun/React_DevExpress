import React from "react";
import DataGrid, {
	Column,
	Grouping,
	GroupPanel,
	Pager,
	Paging,
	SearchPanel,
} from "devextreme-react/data-grid";
import DiscountCell from "./DataGrid/DiscountCell";
import InputCheck from "./InputCheck";
const DataGridComponent = (props) => {
	const {
		dataSourceOptions,
		allowColumnReordering,
		rowAlternationEnabled,
		showBorders,
		pageSizes,
		allowColumnResizing,

		setallowColumnResizing,
		setallowColumnReordering,
		setrowAlternationEnabled,
		onContentReady,
		setshowBorders,
	} = props;

	return (
		<div className="DataGridComponent" style={{ margin: "0 10px" }}>
			<div className="options">
				<InputCheck
					name="border 활성화"
					value={showBorders}
					setValue={setshowBorders}
				/>
				<InputCheck
					name="Column 위치변경 활성화"
					value={allowColumnReordering}
					setValue={setallowColumnReordering}
				/>
				<InputCheck
					name="row 생상구분 활성화"
					value={rowAlternationEnabled}
					setValue={setrowAlternationEnabled}
				/>
				<InputCheck
					name="Column 넓이변경 활성화"
					value={allowColumnResizing}
					setValue={setallowColumnResizing}
				/>
			</div>
			<DataGrid
				dataSource={dataSourceOptions} // 출력할 데이터 (각 헤더의 첫 문자는 대문자로  변환됨.)
				allowColumnReordering={allowColumnReordering}
				rowAlternationEnabled={rowAlternationEnabled}
				allowColumnResizing={allowColumnResizing}
				showBorders={showBorders}
				onContentReady={onContentReady}
			>
				{/* 그루핑 */}
				<GroupPanel
					visible={true}
					emptyPanelText="정렬할 행을 드래그하세요"
					allowColumnDragging={true}
				/>
				{/* 검색 */}
				<SearchPanel visible={true} highlightCaseSensitive={true} width={300} />
				<Column
					dataField="Discount"
					caption="Discount %"
					dataType="number"
					format="percent"
					alignment="right"
					allowGrouping={false}
					cellRender={DiscountCell}
					cssClass="bullet"
				/>
				{/* DataGrid 내부에 Column 으로 데이터필드를 특정하면 해당 데이터만 보임 Column 을 모두 지우면 전체 데이터가 보임*/}
				{/* 
                주요 옵션
                groupIndex: 디폴트로 정렬해버림 숫자로 우선순위를 지정할 수있음. 시작: 0 
                dataType: 데이터 타입 지정 date, string ...
                width: 넓이
                */}
				<Column dataField="SaleDate" dataType="date" />
				<Column dataField="Product" />
				<Column dataField="Region" dataType="string" />
				<Column dataField="Customer" dataType="string" />

				{/* 한번에 보여줄 데이터 개수 조정(배열로 개수 저장, 가변) */}
				<Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />

				{/* 한번에 보여줄 데이터 개수 (초기에 설정) */}
				<Paging defaultPageSize={10} />
			</DataGrid>
		</div>
	);
};

export default DataGridComponent;
