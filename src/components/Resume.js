import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "./axios";

import "./Resume.css";
const Resume = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("/resume").then((res) => {
			setItems(res.data);
		});
	}, [items]);

	return (
		<div className="container">
			<div className="top">
				<h2 class="top-title">
					Resume Items&nbsp;<i className="fas fa-arrow-right"></i>
				</h2>
				<a href="">
					<i className="fas fa-plus"></i>
				</a>
			</div>
			<div className="resumes">
				{items.map((item) => (
					<Item item={item} />
				))}
			</div>
		</div>
	);
};

export default Resume;
