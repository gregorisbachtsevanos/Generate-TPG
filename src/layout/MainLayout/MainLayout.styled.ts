import styled from "styled-components";

export const StyledMainLayout = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 0 2rem;
	overflow: hidden;
	background: rgb(23, 25, 26);
	background: linear-gradient(
		167deg,
		rgba(23, 25, 26, 1) 0%,
		rgba(129, 96, 51, 1) 100%
	);

	&.noPadding {
		padding: 0;
	}
`;
