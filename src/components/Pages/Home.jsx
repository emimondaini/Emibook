import React from "react";
import LatestRelease from "../LatestRelease/LatestRelease";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Jumbotron/Welcome";
import Footer from "../Footer/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Welcome />
			<LatestRelease />
			<Footer />
		</div>
	);
};

export default Home;