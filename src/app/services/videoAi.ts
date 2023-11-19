import Replicate from "replicate";
import { config } from "../../config";

const replicate = new Replicate({
	auth: config.replicateKey,
});

export async function main({ prompt }: { prompt: string }) {
	const output = await replicate.run(
		"anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
		{
			input: {
				prompt,
			},
		}
	);
	console.log(output);
}
