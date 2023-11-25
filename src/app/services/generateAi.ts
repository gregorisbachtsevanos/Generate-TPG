import { api } from "./api/api";

type generateAi = {
	type: [];
	items: {
		type: string;
		format: string;
	};
	title: string;
};

export const generateApi = api.injectEndpoints({
	endpoints: (build) => ({
		generateImage: build.query<generateAi, void>({
			query: ({ prompt }: { prompt: string }) => ({
				url: `http://localhost:3001/image-generator?prompt=${prompt}`,
				method: "GET",
			}),
		}),
		generateVideo: build.query<generateAi, void>({
			query: ({ prompt }: { prompt: string }) => ({
				url: `http://localhost:3001/video-generator?prompt=${prompt}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGenerateImageQuery, useGenerateVideoQuery } = generateApi;
