import styled from "styled-components";

export const StyledImageContainer = styled.div`
	position: absolute;
	top: 45%;
	left: 70%;
	transform: translate(-50%, -50%);
`;

export const StyledPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: calc(100vh - 50px);

	.btn {
		height: 40%;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		a {
			text-decoration: none;
		}
	}

	.caption {
		display: flex;
		word-break: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		justify-content: flex-end;
		h4 {
			width: 50%;
		}
	}
`;
