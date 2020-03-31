import React from "react";

export const Button = props => {
	const elementClassName = ["btn"];
	const { btnType, clicked, disabled, textButton } = props;

	const getButtonCss = () => {
		switch (btnType) {
			case "Cancel":
				elementClassName.push("btn-danger");
				break;
			case "Reset":
				elementClassName.push("btn-secondary");
				break;
			case "Success":
			default:
				elementClassName.push("btn-success");
				break;
		}

		return elementClassName.join(" ");
	};

	return (
		<button
			className={getButtonCss()}
			onClick={clicked}
			type="button"
			disabled={disabled}
		>
			{textButton}
		</button>
	);
};
