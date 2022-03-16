import logo from "./logo.svg";
import "./App.css";
import "devextreme/dist/css/dx.light.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataGridPage from "./Page/DataGridPage";
import HeaderContainer from "./Container/HeaderContainer";
import { URL } from "./Data";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route element={<DataGridPage />} path={URL.DataGrid} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
