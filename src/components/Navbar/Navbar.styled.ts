import styled from "styled-components";

export const StyledNavbarContainer = styled.nav`
	height: 50px;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 1;

	div {
		color: ${({ theme }) => theme.palette.black};
	}
`;
