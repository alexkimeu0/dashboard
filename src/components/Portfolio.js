import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";

import Project from "./Project";

import "./Portfolio.css";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios.get("/portfolio").then((res) => {
			setProjects(res.data);
		});
	}, [projects]);

	return (
		<div className="container">
			<div className="projects">
				<div className="top">
					<h2 class="top-title">
						Projects&nbsp;<i className="fas fa-arrow-right"></i>
					</h2>
					<Link to="/newproject">
						<i className="fas fa-plus"></i>
					</Link>
				</div>
				<div className="items">
					{projects.map((project) => (
						<Project project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
