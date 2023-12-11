import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			black: string;
			blue: {
				1: string;
				2: string;
				3: string;
				4: string;
			};
			white: string;
			success: string;
			error: string;
			yellow: string;
		};
	}
}
