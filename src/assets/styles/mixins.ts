import { css } from "styled-components";

export const buttonStylesMixin = css`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 230px;
	height: 75px;
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.palette.yellow};
	color: ${({ theme }) => theme.palette.black};
	border-radius: 50px;
	font-weight: bold;

	:nth-child(2) {
		transform: scale(1.5);
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 1.1rem;
	}

	&.small {
		width: 130px;
		height: 20px;
		padding: 1rem;
	}
`;
