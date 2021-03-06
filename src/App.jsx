import "./App.css";
import "devextreme/dist/css/dx.light.css";
import "devexpress-diagram/dist/dx-diagram.css";
import "devexpress-gantt/dist/dx-gantt.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridPage from "./Page/DataGridPage";
import HeaderContainer from "./Container/HeaderContainer";
import { URL } from "./Data";
import PivotGridPage from "./Page/PivotGridPage";
import TreeListPage from "./Page/TreeListPage";
import SchedulerPage from "./Page/SchedulerPage";
import HtmlEditorPage from "./Page/HtmlEditorPage";
import DiagramPage from "./Page/DiagramPage";
import GanttPage from "./Page/GanttPage";
import GaugesPage from "./Page/GaugesPage";
import NavigationPage from "./Page/NavigationPage";
import ChartsPage from "./Page/ChartsPage";
import EditorsPage from "./Page/EditorsPage";
import HomePage from "./Page/HomePage";
import FormsandMulit_purposePage from "./Page/FormsandMulit_purposePage";
import FilemanagementPage from "./Page/FilemanagementPage";
import ActionsAndListsPage from "./Page/ActionsAndListsPage";
import MapsPage from "./Page/MapsPage";
import DialogsAndNotificationsPage from "./Page/DialogsAndNotificationsPage";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route element={<HomePage />} path={"/"} />
				<Route element={<DataGridPage />} path={URL.DataGrid} />
				<Route element={<PivotGridPage />} path={URL.PivotGrid} />
				<Route element={<TreeListPage />} path={URL.TreeList} />
				<Route element={<SchedulerPage />} path={URL.Scheduler} />
				<Route element={<HtmlEditorPage />} path={URL.HtmlEditor} />
				<Route element={<DiagramPage />} path={URL.Diagram} />
				<Route element={<ChartsPage />} path={URL.Chart} />
				<Route element={<GanttPage />} path={URL.Gantt} />
				<Route element={<GaugesPage />} path={URL.Gauges} />
				<Route element={<NavigationPage />} path={URL.Navigation} />
				<Route element={<EditorsPage />} path={URL.Editors} />
				<Route
					element={<FormsandMulit_purposePage />}
					path={URL.FormsandMulit_purpose}
				/>
				<Route element={<FilemanagementPage />} path={URL.FileManageMent} />
				<Route element={<ActionsAndListsPage />} path={URL.ActionsAndList} />
				<Route element={<MapsPage />} path={URL.Maps} />
				<Route
					element={<DialogsAndNotificationsPage />}
					path={URL.DialogsAndNotifications}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
