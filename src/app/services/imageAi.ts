import Replicate from "replicate";
import { config } from "../../config";

const replicate = new Replicate({
	auth: config.replicateKey,
});

export const generateImage = async ({ prompt }: { prompt: string }) => {
	const res = await replicate.run(
		"stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
		{
			input: {
				prompt,
			},
		}
	);

	return res;
};
