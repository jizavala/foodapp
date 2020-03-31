import React from "react";
import "./Input.scss";

export const Input = props => {
	const {
		inputType,
		changed,
		keyup,
		invalid,
		inputLabel,
		inputId,
		value,
		inputName,
		shouldValidate,
		touched
	} = props;

	let inputClassName = ["form-control"];

	if (invalid && shouldValidate && touched) {
		inputClassName.push("invalid");
	}

	const getInputType = () => {
		let inputElement = null;

		switch (inputType) {
			case "radiobutton":
				break;
			case "checkbox":
				break;
			case "textarea":
				break;
			case "select":
				break;
			case "input":
			default:
				inputElement = (
					<input
						className={inputClassName.join(" ")}
						{...props.elementConfig}
						id={inputId}
						onChange={changed}
						onKeyUp={keyup}
						value={value}
						name={inputName}
					/>
				);
				break;
		}

		return inputElement;
	};

	const buildInputElement = () => {
		return (
			<div className="row">
				<div className="col-4 col-sm-4">
					<label htmlFor={inputId} className="col-form-label">
						{inputLabel}
					</label>
				</div>
				<div className="col-6 col-sm-4 offset-1">{getInputType()}</div>
			</div>
		);
	};

	return buildInputElement();
};
