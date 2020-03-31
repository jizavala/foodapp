import React, { useContext, useEffect } from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
// import Spinner from "../UI/Button/Spinner";
import { useGlobalState } from "../../hooks/useGlobalStateContext";
import useInput from "../../hooks/useInput";

import "./FoodForm.scss";

export const FoodForm = props => {
	const [state] = useGlobalState();
	const { foodForm } = state;

	const [nameFood, setValueNameFood, resetNameFood] = useInput("");
	const [fat, setValueFat, resetFat] = useInput(0);
	const [carbs, setValueCarbs, resetCarbs] = useInput(0);
	const [protein, setValueProtein, resetProtein] = useInput(0);
	const [calories, setValueCalories, resetCalories] = useInput(0);

	const onChangeHandler = (e, inputIdentifier) => {
		onKeyUpHandler(e, inputIdentifier);
	};

	const onKeyUpHandler = (e, inputIdentifier) => {
		state.foodForm[inputIdentifier].value = e.target.value;

		setInputValue(inputIdentifier, state.foodForm[inputIdentifier].value);
		const { value, validation, elementConfig } = state.foodForm[
			inputIdentifier
		];

		state.foodForm[inputIdentifier].valid = validateForm(
			value,
			validation,
			elementConfig
		);
		state.foodForm[inputIdentifier].touched = true;

		let formIsvalid = true;

		for (let inputId in state.foodForm) {
			formIsvalid = state.foodForm[inputId].valid && formIsvalid;
		}

		state.formIsValid = formIsvalid;

		calculateCalories();
	};

	const setInputValue = (inputIdentifier, value) => {
		switch (inputIdentifier) {
			case "fat":
				setValueFat(value);
				break;
			case "carbs":
				setValueCarbs(value);
				break;
			case "protein":
				setValueProtein(value);
				break;
			case "nameFood":
				setValueNameFood(value);
				break;
			case "calories":
				setValueCalories(value);
				break;
			default:
				break;
		}
	};

	const calculateCalories = () => {
		const totalCalories = 4 * carbs + 4 * protein + 9 * fat;

		state.foodForm["calories"].value = totalCalories;
		setInputValue("calories", totalCalories);
	};

	const resetForm = () => {
		resetCarbs();
		resetNameFood();
		resetProtein();
		resetFat();
		resetCalories();
	};

	const validateForm = (value, rules, elementConfig) => {
		let isValid = true;

		if (rules.required) isValid = value.trim() !== "" && isValid;

		switch (elementConfig["type"]) {
			case "text":
				break;
			case "numeric":
				break;
			default:
				break;
		}

		if (rules.minLength) isValid = value.length >= rules.minLength && isValid;

		if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;

		return isValid;
	};

	const generateForm = () => {
		const formElements = [];
		for (let key in foodForm) {
			formElements.push({
				id: key,
				config: foodForm[key]
			});
		}

		return formElements.map(formElement => {
			return (
				<Input
					key={formElement.id}
					inputType={formElement.inputType}
					elementConfig={formElement.config.elementConfig}
					inputLabel={formElement.config.label}
					inputId={formElement.id}
					value={formElement.config.value}
					inputName={formElement.config.name}
					changed={e => onChangeHandler(e, formElement.id)}
					keyup={e => onKeyUpHandler(e, formElement.id)}
					invalid={!formElement.config.valid}
					shouldValidation={formElement.config.validation}
					touched={formElement.config.touched}
				/>
			);
		});
	};

	return (
		<form>
			{generateForm()}
			<div className="row">
				<div className="col-4 col-sm-2">
					<Button
						btnType="Success"
						textButton="Save"
						disabled={!state.formIsValid}
					/>
				</div>
				<div className="col-4 col-sm-2">
					<Button btnType="Cancel" textButton="Cancel" disabled={false} />
				</div>
				<div className="col-4 col-sm-2">
					<Button
						btnType="Reset"
						textButton="Reset"
						disabled={false}
						clicked={() => resetForm()}
					/>
				</div>
			</div>
		</form>
	);
};
