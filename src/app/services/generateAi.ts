import { api } from "./api/api";

type generateAiProps = {
	type: [];
	items: {
		type: string;
		format: string;
	};
	title: string;
};

export const generateApi = api.injectEndpoints({
	endpoints: (build) => ({
		generateImage: build.query<generateAiProps, string>({
			query: (prompt) => ({
				url: `http://localhost:3001/image-generator?prompt=${prompt}`,
			}),
		}),
		generateVideo: build.query<generateAiProps, string>({
			query: (prompt) => ({
				url: `http://localhost:3001/video-generator?prompt=${prompt}`,
			}),
		}),
	}),
});

export const { useGenerateImageQuery, useGenerateVideoQuery } = generateApi;
