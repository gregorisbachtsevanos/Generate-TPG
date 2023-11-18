import { StyledNavbarContainer } from "./Navbar.styled";
import Button from "../Button";

const Navbar = () => {
	return (
		<StyledNavbarContainer>
			<div>Generate TPG</div>
			<Button
				styleType="ghost"
				as="Link"
				to="/sign-up"
				size="small"
				withOutPadding
			>
				login
			</Button>
		</StyledNavbarContainer>
	);
};

export default Navbar;
