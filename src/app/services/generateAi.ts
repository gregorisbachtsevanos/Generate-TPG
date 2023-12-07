import { api } from "./api/api";

type generateAiResponseProps = {
	message: string;
	response: string[];
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

export const { useLazyGenerateImageQuery, useLazyGenerateVideoQuery } =
	generateApi;
