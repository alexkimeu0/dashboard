import React from "react";
import "./Create.css";

const CreatePost = () => {
	return (
		<div className="container">
			<div className="top">
				<h2 class="top-title">
					Create New Post&nbsp;<i className="fas fa-arrow-right"></i>
				</h2>
			</div>
			<div className="body">
				<form>
					<input type="text" name="title" placeholder="Post title..." />
					<input type="text" name="author" placeholder="Author..." />
					<textarea name="content" placeholder="Content..." rows="15" />
					<input type="file" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
