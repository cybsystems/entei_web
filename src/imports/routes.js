import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
const Students = () => <div>Students</div>
const Routes = () => (
	<Router>
		<Route exact path="/" component={Login} />
		<Route path="/login" component={Login} />

		<Route path="/dashboard" component={Dashboard} />

	</Router>
);
export default Routes;
