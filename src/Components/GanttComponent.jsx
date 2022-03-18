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
	const { Gtttasks, dependencies, resources, resourceAssignments } = props;
	return (
		<div className="Container">
			<h3>Gantt</h3>
			<div className="options"></div>
			<Gantt taskListWidth={500} scaleType="weeks" height={700}>
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
