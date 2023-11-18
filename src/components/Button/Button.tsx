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
import { Link } from "react-router-dom";

type BaseProps = {
	children: ReactNode | ReactNode[];
	className?: string;
	styleType: "primary" | "secondary" | "ghost" | "tertiary";
	isLoading?: boolean;
	loaderColor?: "black" | "white";
	size?: "small" | "regular" | "big";
	withOutPadding?: boolean;
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
	} ${props.className ? props.className : ""} ${
		props.withOutPadding ? "noPadding" : ""
	}`;

	if (props.as === "Link") {
		return (
			<StyledButtonLinkContainer
				className={`${allClassNames ? allClassNames : ""}`}
			>
				<Link to={props.to}>{props.children}</Link>
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
