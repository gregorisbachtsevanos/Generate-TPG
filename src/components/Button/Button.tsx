import React, {
	FC,
	ReactNode,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from "react";

import {
	StyledButtonContainer,
	StyledButtonLinkContainer,
	StyledButtonTabContainer,
} from "./Button.styled";
import { LinkProps } from "react-router-dom";

type BaseProps = {
	children: ReactNode | ReactNode[];
	className?: string;
	styleType:
		| "primary"
		| "secondary"
		| "ghost"
		| "tertiary"
		| "quaternary"
		| "login"
		| "bottom-sheet";
	isLoading?: boolean;
	loaderColor?: "black" | "white";
	size?: "small" | "regular";
};

type ButtonAsButton = BaseProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		as?: "button";
	};

type ButtonAsExternal = BaseProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		as: "Tab";
	};

type ButtonAsLink = BaseProps &
	Omit<LinkProps, keyof BaseProps> & {
		as: "Link";
		rel?: string;
		target?: string;
		disabled?: boolean;
	};

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink;

const Button: FC<ButtonProps> = (props) => {
	const allClassNames = `${props.styleType ? props.styleType : ""} ${
		props.size ? props.size : ""
	} ${props.className ? props.className : ""}`;

	console.log(allClassNames);

	if (props.as === "Link") {
		return (
			<StyledButtonLinkContainer
				className={`${allClassNames ? allClassNames : ""}`}
			>
				{props.children}
			</StyledButtonLinkContainer>
		);
	} else if (props.as === "Tab") {
		return (
			<StyledButtonTabContainer
				className={`${allClassNames ? allClassNames : ""}`}
			>
				{props.children}
			</StyledButtonTabContainer>
		);
	} else {
		return (
			<StyledButtonContainer
				className={`${allClassNames ? allClassNames : ""}`}
			>
				{props.children}
			</StyledButtonContainer>
		);
	}
};

export default Button;
