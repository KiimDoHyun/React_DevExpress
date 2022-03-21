import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Style/header.css";

const Header = (props) => {
	const { name, router } = props;

	return (
		<>
			<ul className="header_ul">
				<li>React DevExpress</li>
				{name.length > 0 && router.length > 0 ? (
					<>
						{name.map((item, idx) => {
							return (
								<li key={idx}>
									<NavLink to={router[idx]}>{item}</NavLink>
								</li>
							);
						})}
					</>
				) : null}
			</ul>
		</>
	);
};

export default Header;
