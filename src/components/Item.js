import React from "react";
import axios from "./axios";

const deleteItem = (id) => {
	alert("Sure You Wanna Do This??");
	axios.delete(`/resume/${id}`);
};

const Item = ({ item }) => {
	return (
		<div className="card">
			<div className="card-header">
				<h2 className="title">
					{item.title}
					<span>{item.timeline}</span>
				</h2>
			</div>

			<div className="body">
				<p>{item.description}</p>
			</div>

			<div className="card-footer">
				<button>
					<i className="fas fa-edit edit"></i>
				</button>
				<button onClick={() => deleteItem(item._id)}>
					<i className="fas fa-trash delete"></i>
				</button>
			</div>
		</div>
	);
};

export default Item;
