/** @format */

import React from "react";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
const SharedLayout = (props) => (
	<>
		<Navbar onLogout={props.onLogout} isAuthenticated={props.isAuthenticated} />
		<Outlet />
		<Footer />
	</>
);
export default SharedLayout;
