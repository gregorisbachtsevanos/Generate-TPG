import { TitleLg } from "../../assets/styles/theme";
import Button from "../Button";
import { StyledSidebarContainer } from "./Sidebar.styled";

const Sidebar = () => {
	return (
		<StyledSidebarContainer>
			<TitleLg>Generate TPG</TitleLg>
			<div className="btn-container">
				<Button styleType="secondary" size="regular" as="Link" to="/">
					End Demo
				</Button>
				<Button
					styleType="primary"
					size="regular"
					as="Link"
					to="/sign-up"
				>
					Sign Up
				</Button>
			</div>
		</StyledSidebarContainer>
	);
};

export default Sidebar;
