import { api } from "./api/api";

type generateAiResponseProps = {
	type: [];
	items: {
		type: string;
		format: string;
	};
	title: string;
};

type generateAiProps = {
	prompt: string;
};

export const generateApi = api.injectEndpoints({
	endpoints: (build) => ({
		generateImage: build.query<generateAiResponseProps, string>({
			query: (prompt) => `image-generator?prompt=${prompt}`,
		}),
		generateVideo: build.query<generateAiResponseProps, string>({
			query: (prompt) => `video-generator?prompt=${prompt}`,
		}),
	}),
});

export const { useGenerateImageQuery, useGenerateVideoQuery } = generateApi;
