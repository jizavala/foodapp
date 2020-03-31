import React from "react";
import { FoodList } from "../../components/FoodList/FoodList";
import { FoodForm } from "../../components/FoodForm/FoodForm";
import Aux from "../../hoc/Aux";

export const FoodTracker = () => {
	return (
		<Aux>
			<FoodForm />
			<FoodList />
		</Aux>
	);
};
