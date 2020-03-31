import React from "react";
import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../hoc/Aux";

const NavigationItems = () => {
	return (
		<Aux>
			<NavigationItem link="/" displayNameLink="Home" />
		</Aux>
	);
};

export default NavigationItems;
