import styled from "styled-components";

export const StyledMainLayout = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 0 2rem;
	overflow: hidden;
	background: linear-gradient(
		160deg,
		rgba(24, 36, 57, 1) 0%,
		rgba(22, 45, 68, 1) 25%,
		rgba(46, 21, 77, 1) 60%,
		rgba(42, 22, 70, 1) 100%
	);

	&.noPadding {
		padding: 0;
	}
`;
