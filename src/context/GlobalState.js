import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialGlobalState = {
	foodsList: [
		{
			id: 1,
			nameFood: "Hamburguer",
			protein: 30,
			fat: 40,
			carbs: 100,
			calories: 880
		},
		{
			id: 2,
			nameFood: "Hot Dog",
			protein: 10,
			fat: 100,
			carbs: 150,
			calories: 1540
		}
	],
	foodForm: {
		nameFood: {
			elementType: "input",
			name: "txtNameFood",
			elementConfig: {
				type: "text",
				placeholder: "Food Name ex. Subway Mozarrello"
			},
			label: "Food Name:",
			value: "",
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		fat: {
			elementType: "input",
			name: "txtFat",
			elementConfig: {
				type: "number",
				min: 0,
				placeholder: "Quantity of Fat"
			},
			label: "Fat",
			value: 0,
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		carbs: {
			elementType: "input",
			name: "txtCarbs",
			elementConfig: {
				type: "number",
				min: 0,
				placeholder: "Quantity of Carbohydrates"
			},
			label: "Carbohydrates",
			value: 0,
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		protein: {
			elementType: "input",
			name: "txtProtein",
			elementConfig: {
				type: "number",
				min: 0,
				placeholder: "Quantity of Proteins"
			},
			label: "Protein",
			value: 0,
			validation: {
				required: true
			},
			valid: false,
			touched: false
		},
		calories: {
			elementType: "input",
			name: "txtCalories",
			elementConfig: {
				type: "number",
				min: 0,
				placeholder: "Total calories",
				disabled: "disabled"
			},
			label: "Total Calories",
			value: 0,
			valid: true,
			touched: true
		}
	},
	formIsValid: false,
	isLoading: false
};

//Create context
export const GlobalStateContext = createContext(initialGlobalState);
export const DispatchStateContext = createContext(undefined);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		AppReducer,
		initialGlobalState,
		(state, newValue) => ({ ...state, ...newValue })
	);

	return (
		<GlobalStateContext.Provider
			value={{ foodsList: state.foodsList, foodForm: state.foodForm }}
		>
			<DispatchStateContext.Provider value={dispatch}>
				{children}
			</DispatchStateContext.Provider>
		</GlobalStateContext.Provider>
	);
};
