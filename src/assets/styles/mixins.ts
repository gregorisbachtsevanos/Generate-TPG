import { css } from "styled-components";

export const buttonStylesMixin = css`
	cursor: pointer;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: ${({ theme }) => theme.palette.black};
	border-radius: 50px;
	font-weight: bold;

	&.primary {
		background-color: ${({ theme }) => theme.palette.black};
	}

	&.secondary {
		background-color: ${({ theme }) => theme.palette.black};
	}

	&.ghost > * {
		font-weight: lighter;
		color: ${({ theme }) => theme.palette.yellow[1]};
	}

	&.big {
		width: 230px;
		height: 75px;
		padding: 1.5rem;
	}

	&.regular {
		width: 130px;
		height: 20px;
		padding: 1rem;
	}

	&.small {
		width: 80px;
		height: 20px;
		padding: 1rem;
	}

	&.noPadding {
		padding: 0;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 1.1rem;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.palette.black};
	}
`;
