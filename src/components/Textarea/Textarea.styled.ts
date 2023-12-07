import styled from "styled-components";

export const StyledTextareaContainer = styled.div`
	width: 90vh;
	border-radius: 8px;

	.caption {
		background-color: ${({ theme }) => theme.palette.blue[2]};
		border-radius: 8px;
		color: ${({ theme }) => theme.palette.white};
		font-size: 0.9rem;
		outline: none;
		resize: none;
		overflow: hidden;
		min-height: 36px;
		width: 100%;
		box-sizing: border-box;
		padding: 8px;
		white-space: pre-wrap;
		overflow-wrap: break-word;
	}

	.error {
		position: absolute;
		bottom: -0.5%;
		color: ${({ theme }) => theme.palette.error};
	}
`;
