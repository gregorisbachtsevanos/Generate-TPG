import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			black: string;
			dark: {
				1: string;
				2: string;
			};
			violet: {
				1: string;
				2: string;
			};
			white: string;
			success: string;
			error: string;
			yellow: string;
			pink: string;
		};
	}
}
