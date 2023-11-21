import styled from "styled-components";

export const StyledCardContainer = styled.div`
	background-color: ${({ theme }) => theme.palette.black};
	/* max-width: 350px; */
	width: auto;
	border-radius: 8px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 300px;
	}
`;
