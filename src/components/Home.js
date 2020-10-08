import React from "react";
import soda from "../images/soda.jpg";
import "./Home.css";

const Home = () => {
	return (
		<div className="container">
			<div className="items">
				<div className="card">
					<h2 className="title">Posts</h2>
					<div className="card-body">
						<img src={soda} alt="Posts" />
					</div>
					<div className="card-footer">
						<h3 className="count">Total: 5</h3>
					</div>
				</div>

				<div className="card">
					<h2 className="title">Resume</h2>
					<div className="card-body">
						<img src={soda} alt="Posts" />
					</div>
					<div className="card-footer">
						<h3 className="count">Total: 5</h3>
					</div>
				</div>

				<div className="card">
					<h2 className="title">Projects</h2>
					<div className="card-body">
						<img src={soda} alt="Posts" />
					</div>
					<div className="card-footer">
						<h3 className="count">Total: 5</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
