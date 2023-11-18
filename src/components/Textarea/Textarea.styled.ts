import styled from "styled-components";

export const StyledTextareaContainer = styled.div`
	width: 90vh;
	display: flex;
	background-color: ${({ theme }) => theme.palette.blue[2]};
	border-radius: 8px;

	.textarea {
		padding: 5px;
		width: 100%;
		min-height: 100px;
		border-radius: 8px;
		color: ${({ theme }) => theme.palette.white};
		font-size: 0.9rem;
		outline: none;
	}

	:last-child {
		padding: 5px;
		width: 40px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: baseline;

		img {
			height: 30%;
		}
	}
`;
