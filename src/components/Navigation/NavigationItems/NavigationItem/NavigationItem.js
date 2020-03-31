import React, { useState } from "react";
import uuid from "uuid/v1";
import Aux from "../../../../hoc/Aux";
import "./NavigationItem.scss";

const NavigationItem = props => {
	console.log(props);

	const createElementLi = () => {
		const { link, displayNameLink, isActiveLink } = props;
		const classActive =
			isActiveLink === "true" ? "nav-item active" : "nav-item";
		const textSr =
			isActiveLink === "true" ? <span className="sr-only">(Current)</span> : "";

		return (
			<li className={classActive}>
				<a className="nav-link" href={link}>
					{displayNameLink}
					{textSr}
				</a>
			</li>
		);
	};

	return <Aux>{createElementLi()}</Aux>;
};

export default NavigationItem;
