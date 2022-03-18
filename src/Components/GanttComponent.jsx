import React from "react";
import Gantt, {
	Tasks,
	Dependencies,
	Resources,
	ResourceAssignments,
	Column,
	Editing,
	Toolbar,
	Item,
	Validation,
} from "devextreme-react/gantt";

const GanttComponent = (props) => {
	const {
		Gtttasks,
		dependencies,
		resources,
		resourceAssignments,
		reff,
		scaleTypeArr,
		scaleType,
		onChangeScaleType,
	} = props;
	return (
		<div className="Container">
			<h3>Gantt</h3>
			<div className="options">
				<label htmlFor="scaleType">ScaleType</label>
				<select id="scaleType" value={scaleType} onChange={onChangeScaleType}>
					{scaleTypeArr.map((item, idx) => {
						return (
							<option key={idx} value={item}>
								{item}
							</option>
						);
					})}
				</select>
				<input ari />
			</div>
			<Gantt taskListWidth={500} scaleType={scaleType} height={700} ref={reff}>
				<Tasks dataSource={Gtttasks} />
				<Dependencies dataSource={dependencies} />
				<Resources dataSource={resources} />
				<ResourceAssignments dataSource={resourceAssignments} />

				<Toolbar>
					<Item name="undo" />
					<Item name="redo" />

					<Item name="separator" />
					<Item name="collapseAll" />
					<Item name="expandAll" />

					<Item name="separator" />
					<Item name="addTask" />
					<Item name="deleteTask" />

					<Item name="separator" />
					<Item name="zoomIn" />
					<Item name="zoomOut" />

					{/* 예제엔 없던 메뉴들 */}
					<Item name="separator" />
					<Item name="taskDetails" />
					<Item name="fullScreen" />
					<Item name="resourceManager" />
					<Item name="showResources" />
					<Item name="showDependencies" />
				</Toolbar>

				<Column dataField="title" caption="Subject" width={300} />
				<Column dataField="start" caption="Start Date" />
				<Column dataField="end" caption="End Date" />

				<Validation autoUpdateParentTasks />
				<Editing enabled />
			</Gantt>
		</div>
	);
};

export default GanttComponent;
