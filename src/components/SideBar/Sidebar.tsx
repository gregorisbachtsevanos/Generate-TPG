import React from "react";
import { StyledSidebarContainer } from "./Sidebar.styled";
import Button from "../Button";

const Sidebar = () => {
	return (
		<StyledSidebarContainer>
			<Button styleType="primary" size="small" as="Link" to="sign-up">
				Sign Up
			</Button>
		</StyledSidebarContainer>
	);
};

export default Sidebar;
