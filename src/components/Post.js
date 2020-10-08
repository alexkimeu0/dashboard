import React from "react";
import axios from "./axios";

const deletePost = (id) => {
	alert("Sure You Wanna Do This??");
	axios.delete(`/blog/${id}`);
};

const Post = ({ post }) => {
	return (
		<div className="card">
			<div className="card-header">
				<h2 className="title">
					{post.title}
					<span>2019 ~ Present</span>
				</h2>
			</div>

			<div className="body">
				<img src={post.image} alt="post title" />
			</div>
			<div className="card-footer">
				<a href="">
					<i className="fas fa-edit edit"></i>
				</a>
				<button onClick={() => deletePost(post._id)}>
					<i className="fas fa-trash delete"></i>
				</button>
			</div>
		</div>
	);
};

export default Post;
