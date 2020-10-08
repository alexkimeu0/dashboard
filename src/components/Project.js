import axios from "./axios";
import React from "react";

const deleteProject = (id) => {
	alert("Sure You Wanna Do This??");
	axios.delete(`/portfolio/${id}`);
};

const Project = ({ project }) => {
	return (
		<div className="card">
			<div className="card-header">
				<h2 className="title">{project.title}</h2>
				<div className="techs">
					{" "}
					<p>{project.technologies}</p>
				</div>
			</div>

			<a href={project.url}>
				<div className="card-body">
					<img src={project.image} alt="Posts" />
				</div>
			</a>
			<div className="card-footer">
				<a href="">
					<i className="fas fa-edit edit"></i>
				</a>
				<button onClick={() => deleteProject(project._id)}>
					<i className="fas fa-trash delete"></i>
				</button>
			</div>
		</div>
	);
};

export default Project;
