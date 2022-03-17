import React from "react";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import DataCellContainer from "../Container/Scheduler/DataCellContainer";
import ResourceCellContainer from "../Container/Scheduler/ResourceCellContainer";
import "../Style/Scheduler.css";

const SchedulerComponent = (props) => {
	const {
		groups,
		views,
		currentDate,
		employees,
		data,
		currentViewType,
		currentView,
		onChangeCurrentView,
	} = props;
	return (
		<div className="Container">
			<h3>Scheduler</h3>
			<div className="options">
				<select
					id="currentView"
					value={currentView}
					onChange={onChangeCurrentView}
				>
					{currentViewType.map((item, idx) => {
						return (
							<option key={idx} value={item}>
								{item}
							</option>
						);
					})}
				</select>
				<label htmlFor="currentView">currentView</label>
			</div>
			<Scheduler
				timeZone="America/Los_Angeles"
				dataSource={data}
				// dataCellComponent={DataCellContainer} // customComponent 가능
				// resourceCellComponent={ResourceCellContainer} // 상단에 추가정보 custom 가능
				groups={groups}
				views={views}
				currentView={currentView}
				// defaultCurrentView="month"
				defaultCurrentDate={currentDate} // 기본 날짜 설정 가능 (현재 테스트 데이터를 보여주기 위한 임의의 날짜가 설정되어있음.)
				height={600}
				showAllDayPanel={true}
				firstDayOfWeek={1}
				startDayHour={8}
				endDayHour={18}
			>
				<Resource
					label="Employee"
					fieldExpr="employeeID"
					dataSource={employees}
					allowMultiple={false}
				/>
			</Scheduler>
		</div>
	);
};

export default SchedulerComponent;
