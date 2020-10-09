import React from "react";
import axios from "./axios";
import "./Create.css";

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			title: "",
			timeline: "",
			company: "",
			description: "",
		};
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { title, timeline, company, description } = this.state;
		const resume = {
			title,
			timeline,
			company,
			description,
		};

		axios.post("/resume/add", resume).then((res) => console.log(res));
	}

	render() {
		return (
			<div className="container">
				<div className="top">
					<h2 class="top-title">
						Create New Resume Item&nbsp;<i className="fas fa-arrow-right"></i>
					</h2>
				</div>
				<div className="body">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							onChange={this.handleChange}
							name="title"
							placeholder="Title..."
							value={this.state.title}
						/>
						<input
							type="text"
							onChange={this.handleChange}
							name="timeline"
							placeholder="Timeline..."
							value={this.state.timeline}
						/>
						<input
							type="text"
							onChange={this.handleChange}
							name="company"
							placeholder="Company..."
							value={this.state.company}
						/>
						<textarea
							name="description"
							onChange={this.handleChange}
							placeholder="Description..."
							rows="15"
							value={this.state.description}
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePost;
