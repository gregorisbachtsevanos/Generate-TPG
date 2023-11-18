import styled from "styled-components";
import { buttonStylesMixin } from "../../assets/styles/mixins";

export const StyledButtonContainer = styled.div`
	${buttonStylesMixin}
	:nth-child(2) {
		transform: scale(1.5);
	}
`;

export const StyledButtonLinkContainer = styled.div`
	${buttonStylesMixin}
`;

export const StyledButtonTabContainer = styled.div`
	${buttonStylesMixin}
	padding: 2rem;
	width: 150px;
	border-radius: 15px;
	box-shadow: 0px 2px 30px 10px ${({ theme }) => theme.palette.blue[2]};
	background-color: transparent;
`;
