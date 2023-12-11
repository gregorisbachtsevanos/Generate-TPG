import styled, { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
	palette: {
		// black: "#020A18",
		// blue: {
		// 	1: "#00384C",
		// 	2: "#006A74",
		// },
		// green: {
		// 	1: "#009F81",
		// 	2: "#82D079",
		// },
		// yellow: "#F9F871",

		black: "#17191a",
		white: "#CBCBCC",
		yellow: {
			1: "#FABF68",
			2: "#F9B14F",
			3: "#D8853A",
		},
		// black: "#121416",
		// blue: {
		// 	1: "#020a18",
		// 	2: "#09111e",
		// 	3: "#3a68b8",
		// 	4: "#008afd",
		// },
		// white: "#f1f6ff",
		// success: "#49bc92",
		// error: "#cc4848",
		// yellow: "#d7ef41",
	},
};

export const Title2Xl = styled.h1`
	font-weight: 700;
	font-size: 40px;
	line-height: 48px;
	margin: 0;
`;

export const TitleXl = styled.h2`
	font-weight: 700;
	font-size: 30px;
	line-height: 32px;
	margin: 0;
`;

export const TitleLg = styled.h3`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	margin: 0;
`;

export const TitleMd = styled.h4`
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	margin: 0;
`;

export const Title = styled.h4`
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	margin: 0;
`;

export const TitleSecondary = styled.h5`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	margin: 0;
`;

export const TitleBar = styled.div`
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BodyTitle = styled.h4`
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.5px;
	margin: 0;
`;

interface TextProps {
	gray?: boolean;
}

export const Text = styled.span<TextProps>`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
`;

export const Caption = styled.span`
	font-weight: 400;
	font-size: 11px;
	line-height: 16px;
`;

export const LinkStyle = styled.span`
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	text-decoration: underline;
`;

export const Emojis = styled.div`
	font-size: 43px;
	font-weight: 400;
	line-height: 43px;
	letter-spacing: 0.5px;
	text-align: left;
`;
