import React from "react";

import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<div className="nav">
			<div className="container">
				<div className="nav-bar">
					<h3 className="logo">Alex Kimeu</h3>
					<ul>
						<li>
							<Link to="/">Dashboard</Link>
						</li>
						<li>
							<Link to="/admin/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/admin/resume">Resume</Link>
						</li>
						<li>
							<Link to="/admin/blog">Blog</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
