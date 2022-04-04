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

	const ttt = [
		{
			data1: '1',
			data2: 2,
			data3: "3"
		},
		{
			data1: '1',
			data2: 2,
			data3: "3"
		},
		{
			data1: '1',
			data2: 2,
			data3: "3"
		},
		{
			data1: '1',
			data2: 2,
			data3: "3"
		},
		{
			data1: '1',
			data2: 2,
			data3: "3"
		},
	]

	return (
		<div className="Container">
			<h3>DataGrid</h3>
			<div className="options">
				<InputCheck
					name="showBorders"
					value={showBorders}
					setValue={setshowBorders}
				/>
				<InputCheck
					name="allowColumnReordering"
					value={allowColumnReordering}
					setValue={setallowColumnReordering}
				/>
				<InputCheck
					name="rowAlternationEnabled"
					value={rowAlternationEnabled}
					setValue={setrowAlternationEnabled}
				/>
				<InputCheck
					name="allowColumnResizing"
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
				        {/* <Column dataField="Product" groupIndex={0} /> */}

				{/* 검색 */}
				<SearchPanel visible={true} highlightSearchText={true} highlightCaseSensitive={false} width={300} />
				<Grouping autoExpandAll={false} />

				{/* groupIndex 옵션이 할당되면 자동으로 해당 column 으로 정렬되어버림 */}
				<Column dataField="Product" groupIndex={0} />

				<Column
					dataField="Amount"
					caption="Sale Amount"
					dataType="number"
					format="currency"
					alignment="right"
				/>
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
				<Column dataField="Region" dataType="string" />
				<Column dataField="Sector" dataType="string" />
				<Column dataField="Channel" dataType="string" />
				<Column dataField="Customer" dataType="string" width={150} />

				{/* 한번에 보여줄 데이터 개수 조정(배열로 개수 저장, 가변) */}
				<Pager allowedPageSizes={pageSizes} showPageSizeSelector={true}/>

				{/* 한번에 보여줄 데이터 개수 (초기에 설정) */}
				<Paging defaultPageSize={12} />
			</DataGrid>
		</div>
	);
};

export default DataGridComponent;
