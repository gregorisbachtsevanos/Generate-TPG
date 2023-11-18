import styled from "styled-components";

export const StyledSidebarContainer = styled.nav`
	width: 20%;
	height: 100vh;
	max-width: 200px;
	background-color: ${({ theme }) => theme.palette.blue[2]};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;

	&:first-child {
		color: ${({ theme }) => theme.palette.blue[3]};
	}

	.btn-container {
		color: ${({ theme }) => theme.palette.black};
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`;
