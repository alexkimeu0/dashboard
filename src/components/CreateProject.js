import React from "react";
import "./Create.css";

const CreatePost = () => {
	return (
		<div className="container">
			<div className="top">
				<h2 class="top-title">
					Create New Project&nbsp;<i className="fas fa-arrow-right"></i>
				</h2>
			</div>
			<div className="body">
				<form>
					<input type="text" name="title" placeholder="Project title..." />
					<input type="text" name="url" placeholder="URL..." />
					<input
						type="text"
						name="technologies"
						placeholder="Technologies..."
					/>
					<input type="file" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
