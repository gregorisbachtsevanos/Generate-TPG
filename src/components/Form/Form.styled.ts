import styled from "styled-components";

export const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 60vh;
	gap: 25rem;
	justify-content: flex-end;

	form {
		display: flex;
		background-color: ${({ theme }) => theme.palette.blue[2]};
		border-radius: 8px;
		padding: 1rem;

		&.error {
			font-size: 0.8rem;

			border: 1px solid ${({ theme }) => theme.palette.error};
		}

		.select-container {
			gap: 5px;
			display: flex;
			align-items: flex-end;
		}

		.btn-container {
			display: flex;
			align-items: flex-end;

			button {
				background-color: transparent;
				min-height: 40px;
				max-height: 40px;
				min-width: 40px;
				max-width: 40px;
				border-radius: 5px;
				border: 1px solid ${({ theme }) => theme.palette.white};
				cursor: pointer;
			}
		}
	}
`;
