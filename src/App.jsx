import "./App.css";
import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridPage from "./Page/DataGridPage";
import HeaderContainer from "./Container/HeaderContainer";
import { URL } from "./Data";
import PivotGridPage from "./Page/PivotGridPage";
import TreeListPage from "./Page/TreeListPage";
import SchedulerPage from "./Page/SchedulerPage";
import HtmlEditorPage from "./Page/HtmlEditorPage";
import DiagramPage from "./Page/DiagramPage";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route element={<DataGridPage />} path={URL.DataGrid} />
				<Route element={<PivotGridPage />} path={URL.PivotGrid} />
				<Route element={<TreeListPage />} path={URL.TreeList} />
				<Route element={<SchedulerPage />} path={URL.Scheduler} />
				<Route element={<HtmlEditorPage />} path={URL.HtmlEditor} />
				<Route element={<DiagramPage />} path={URL.Diagram} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
