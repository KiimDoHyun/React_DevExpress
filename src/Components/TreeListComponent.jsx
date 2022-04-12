import React from "react";
import TreeList, {
	Column,
	ColumnChooser,
	HeaderFilter,
	SearchPanel,
	Selection,
	Lookup,
} from "devextreme-react/tree-list";
import EmployeeCell from "./TreeList/EmployeeCell";
import { Template } from "devextreme-react/core/template";
import InputCheck from "./InputCheck";
import "../Style/TreeList.css";

const TreeListComponent = (props) => {
	function customizeTaskCompletionText(cellInfo) {
		return `${cellInfo.valueText}%`;
	}

	const {
		expandedKeys,
		selectedKeys,
		dataSourceOptions,
		employees,
		statuses,
		priorities,

		columnChooser,
		setcolumnChooser,
		headerFilter,
		setHeaderFilter,
		showBorders,
		setshowBorders,
		wordWrapEnabled,
		setwordWrapEnabled,
		columnAutoWidth,
		setcolumnAutoWidth,
	} = props;
	return (
		<div className="Container">
			<h3>TreeList</h3>
			<div className="options">
				<InputCheck
					name="columnChooser"
					value={columnChooser}
					setValue={setcolumnChooser}
				/>
				<InputCheck
					name="HeaderFilter"
					value={headerFilter}
					setValue={setHeaderFilter}
				/>
				<InputCheck
					name="showBorders"
					value={showBorders}
					setValue={setshowBorders}
				/>
				<InputCheck
					name="wordWrapEnabled"
					value={wordWrapEnabled}
					setValue={setwordWrapEnabled}
				/>
				<InputCheck
					name="columnAutoWidth"
					value={columnAutoWidth}
					setValue={setcolumnAutoWidth}
				/>
			</div>

			<TreeList
				dataSource={dataSourceOptions} // 객체가 배열로 담겨진 형태
				showBorders={showBorders}
				columnAutoWidth={columnAutoWidth}
				wordWrapEnabled={wordWrapEnabled}
				defaultExpandedRowKeys={expandedKeys}
				defaultSelectedRowKeys={selectedKeys}
				keyExpr="Task_ID"
				parentIdExpr="Task_Parent_ID"
				id="tasks"
			>
				<SearchPanel visible={true} width={250} />
				<HeaderFilter visible={headerFilter} />
				<Selection mode="multiple" />
				<ColumnChooser enabled={columnChooser} />

				<Column dataField="Task_Subject" width={300} />

				<Column
					dataField="Task_Assigned_Employee_ID"
					caption="Assigned"
					allowSorting={true}
					minWidth={200}
					cellTemplate="employeeTemplate" // <Template name="employeeTemplate" render={EmployeeCell} /> 컴포넌트의 name 과 동일하면 이 컴포넌트로 렌더링
				>
					<Lookup dataSource={employees} displayExpr="Name" valueExpr="ID" />
				</Column>
				<Column dataField="Task_Status" caption="Status" minWidth={100}>
					<Lookup dataSource={statuses} />
				</Column>
				<Column dataField="Task_Priority" caption="Priority" visible={true}>
					<Lookup dataSource={priorities} valueExpr="id" displayExpr="value" />
				</Column>

				<Column
					dataField="Task_Completion"
					caption="% Completed"
					minWidth={100}
					customizeText={customizeTaskCompletionText}
					visible={true}
					alignment={'left'}
				/>

				<Column
					dataField="Task_Start_Date"
					caption="Start Date"
					dataType="date"
				/>
				<Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
				<Template name="employeeTemplate" render={EmployeeCell} />
			</TreeList>
		</div>
	);
};

export default TreeListComponent;
