import styled from "styled-components";
import { buttonStylesMixin } from "../../assets/styles/mixins";

export const StyledButtonContainer = styled.div`
	${buttonStylesMixin}
`;

export const StyledButtonLinkContainer = styled.div`
	${buttonStylesMixin}
`;

export const StyledButtonTabContainer = styled.div`
	padding: 2rem;
	border-radius: 15px;
	box-shadow: 0px 2px 37px -5px ${({ theme }) => theme.palette.black};
`;
