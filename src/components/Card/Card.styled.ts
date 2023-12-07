import styled from "styled-components";

export const StyledCardContainer = styled.div`
	background-color: ${({ theme }) => theme.palette.black};
	margin: auto;
	width: auto;
	border-radius: 8px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 500px;
	}
`;
