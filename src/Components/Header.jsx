import React from "react";
import { Link } from "react-router-dom";
import { URL } from "../Data";

const Header = () => {
	return (
		<>
			Header
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={URL.DataGrid}>DataGrid</Link>
				</li>
			</ul>
		</>
	);
};

export default Header;
