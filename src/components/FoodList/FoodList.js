import React, { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import { FoodItem } from "./FoodItem/FoodItem";
import Aux from "../../hoc/Aux";
import uuid from "uuid/v1";
import "./FoodList.scss";

export const FoodList = () => {
	const { foodsList } = useContext(GlobalStateContext);

	const getFoodList = () => {
		return foodsList.map(foodItem => (
			<FoodItem foodItem={foodItem} key={uuid()}></FoodItem>
		));
	};

	return (
		<Aux>
			<div className="row">
				<div className="col-12 col-sm-12 text-center">
					<h4>Food List</h4>
				</div>
			</div>
			<div className="row" id="foodItemList">
				{getFoodList()}
			</div>
		</Aux>
	);
};
