import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";

import { GlobalProvider } from "./context/GlobalState";
const App = () => {
	return (
		<GlobalProvider>
			<div className="container-fluid">
				<Layout></Layout>
			</div>
		</GlobalProvider>
	);
};

export default App;
