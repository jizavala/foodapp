import {
	GlobalStateContext,
	DispatchStateContext
} from "../context/GlobalState";
import { useContext } from "react";

export const useGlobalState = () => [
	useContext(GlobalStateContext),
	useContext(DispatchStateContext)
];
