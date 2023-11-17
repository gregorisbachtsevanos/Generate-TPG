import styled from "styled-components";

export const StyledSidebarContainer = styled.nav`
	width: 20%;
	height: 100vh;
	max-width: 200px;
	background-color: ${({ theme }) => theme.palette.dark[1]};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;
`;
