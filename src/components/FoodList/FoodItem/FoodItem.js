import React from "react";

export const FoodItem = ({ foodItem }) => {
	const { nameFood, carbs, protein, calories, fat, id } = foodItem;
	return (
		<div className="col-12 col-sm-12" id={id}>
			<div className="row text-center">
				<div className="col-4 col-sm-4">{nameFood}</div>
				<div className="col-2 col-sm-2">{carbs}</div>
				<div className="col-2 col-sm-2">{protein}</div>
				<div className="col-2 col-sm-2">{fat}</div>
				<div className="col-2 col-sm-2">{calories}</div>
			</div>
		</div>
	);
};
