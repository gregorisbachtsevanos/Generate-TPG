import styled from "styled-components";

export const StyledPageLayout = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: ${({ theme }) => theme.palette.blue[1]};
	padding: 0;
`;
