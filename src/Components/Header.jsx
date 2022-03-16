import React from "react";
import { Link } from "react-router-dom";
import { URL } from "../Data";
import "../Style/header.css";

const Header = () => {
	return (
		<>
			<ul className="header_ul">
				<li>React DevExpress</li>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={URL.DataGrid}>DataGrid</Link>
				</li>
				<li>
					<Link to={URL.PivotGrid}>PivotGrid</Link>
				</li>
			</ul>
		</>
	);
};

export default Header;
