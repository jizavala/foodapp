import React, { useState } from "react";
import "./Layout.scss";
import Aux from "../../hoc/Aux";
import Navigation from "../Navigation/Navigation";
import { FoodTracker } from "../../containers/FoodTracker/FoodTracker";
import { FoodList } from "../FoodList/FoodList";

const Layout = () => {
	return (
		<Aux>
			<header></header>
			<Navigation />
			<FoodTracker></FoodTracker>
			<footer></footer>
		</Aux>
	);
};

export default Layout;
