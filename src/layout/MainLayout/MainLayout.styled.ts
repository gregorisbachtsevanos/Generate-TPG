import styled from "styled-components";

export const StyledMainLayout = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 0 2rem;
	overflow: hidden;
	background: url("/public/ai-wave.webp") no-repeat;
	background-size: cover;

	&.noPadding {
		padding: 0;
	}
`;
