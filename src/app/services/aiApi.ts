import OpenAI from "openai";
import { config } from "../../config";

const openai = new OpenAI({
	apiKey: config.OpenAIKey,
	dangerouslyAllowBrowser: true,
});

type MainParams = {
	prompt: string;
	amount: {
		value: string;
		label: string;
	};
	resolution: {
		value: string;
		label: string;
	};
};

export async function main({
	prompt,
	amount: { value: amount },
	resolution: { value: resolution },
}: MainParams) {
	console.log(prompt, amount, resolution);

	const image = await openai.images.generate({
		model: "dall-e-3",
		prompt,
	});

	console.log(image);
}
