import styled from "styled-components";

export const StyledAnimationContainer = styled.div`
	.scan {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.scan .face {
		position: relative;
		width: 500px;
		height: 500px;
		background: url(" /robot.png");
		background-size: 500px;
		animation-fill-mode: forwards;
		opacity: 1;
	}

	.scan .face::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url("/man.png");
		background-size: 500px;
		animation: animate 4s ease-in-out infinite;
	}

	.scan .face::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		height: 8px;
		background: ${({ theme }) => theme.palette.black};
		border-radius: 50%;
		filter: drop-shadow(0 0 2px ${({ theme }) => theme.palette.black})
			drop-shadow(0 0 60px ${({ theme }) => theme.palette.black});
		animation: animate-line 4s ease-in-out infinite;
	}

	@keyframes animate {
		0%,
		100% {
			height: 0%;
		}
		50% {
			height: 100%;
		}
	}

	@keyframes animate-line {
		0%,
		100% {
			top: 0%;
		}
		50% {
			top: 100%;
		}
	}
`;
