import { useState, useEffect } from "react";

const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);

	const reset = () => {
		console.log("initialValue", initialValue);
		setValue(initialValue);
	};

	return [value, setValue, reset];
};

export default useInput;
