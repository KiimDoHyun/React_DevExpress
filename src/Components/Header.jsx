import React from "react";
import { Link } from "react-router-dom";
import "../Style/header.css";

const Header = (props) => {
	const { name, router } = props;

	return (
		<>
			<ul className="header_ul">
				<li>React DevExpress</li>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				{name.length > 0 && router.length > 0 ? (
					<>
						{name.map((item, idx) => {
							return (
								<li key={idx}>
									<Link to={router[idx]}>{item}</Link>
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
