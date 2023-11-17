import styled from "styled-components";

export const StyledNavbarContainer = styled.nav`
	height: 50px;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		color: ${({ theme }) => theme.palette.yellow};
	}
`;
