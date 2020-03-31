import React from "react";
import "./Navigation.scss";
import Aux from "../../hoc/Aux";
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = () => {
	return (
		<Aux>
			<nav className="navbar navbar-dark navbar-expand-lg">
				<a className="navbar-brand" href="/">
					Josue
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<NavigationItems />
					</ul>
				</div>
			</nav>
		</Aux>
	);
};

export default Navigation;
