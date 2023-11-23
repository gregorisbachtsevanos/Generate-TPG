import styled from "styled-components";

export const StyledChatContainer = styled.div`
	display: flex;
	.chat-body {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;

		.tabs-container {
			padding-top: 2rem;
			height: 5%;
			display: flex;
			justify-content: center;
			gap: 25px;

			a {
				text-decoration: none;

				* {
					color: ${({ theme }) => theme.palette.yellow};
				}
				.active {
					background-color: ${({ theme }) => theme.palette.blue[2]};
				}
			}
		}

		.media-container {
			width: 60%;

			.generated-images {
				width: 100%;
				margin: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1rem;
				flex-wrap: wrap;
			}
		}
	}
`;
