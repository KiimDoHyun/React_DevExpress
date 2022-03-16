import "./App.css";
import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridPage from "./Page/DataGridPage";
import HeaderContainer from "./Container/HeaderContainer";
import { URL } from "./Data";
import PivotGridPage from "./Page/PivotGridPage";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route element={<DataGridPage />} path={URL.DataGrid} />
				<Route element={<PivotGridPage />} path={URL.PivotGrid} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
