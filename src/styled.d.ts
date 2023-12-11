import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			black: string;
			white: string;
			yellow: {
				1: string;
				2: string;
				3: string;
			};
		};
	}
}
