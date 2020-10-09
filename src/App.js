import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import CreatePost from "./components/CreatePost";

import CreateResume from "./components/CreateResume";
import CreateProject from "./components/CreateProject";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<Nav />

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/admin/portfolio" component={Portfolio} />
					<Route path="/admin/resume" component={Resume} />
					<Route path="/admin/blog" component={Blog} />
					<Route path="/newpost" component={CreatePost} />
					<Route path="/newresume" component={CreateResume} />
					<Route path="/newproject" component={CreateProject} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
