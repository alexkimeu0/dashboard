import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "./axios";
import CreatePost from "./CreatePost";

import { Link } from "react-router-dom";

import "./Blog.css";

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("/blog").then((res) => {
			setPosts(res.data);
		});
	}, [posts]);

	// const createPost = () => <CreatePost />;

	return (
		<div className="container">
			<div className="top">
				<h2 class="top-title">
					Blog Posts&nbsp;<i className="fas fa-arrow-right"></i>
				</h2>
				<Link to="/newpost">
					<i className="fas fa-plus"></i>
				</Link>
			</div>
			<div className="resumes">
				{posts.map((post) => (
					<Post post={post} />
				))}
			</div>
		</div>
	);
};

export default Blog;
