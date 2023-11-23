import Replicate from "replicate";
import { config } from "../../config";

const replicate = new Replicate({
	auth: "r8_LpIfovNTW9GoBwkadO0oDI1czAsXClV3QmkXP",
});

export const generateVideo = async ({ prompt }: { prompt: string }) => {
	console.log(prompt);
	const res = await replicate.run(
		"anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
		{
			input: {
				prompt,
			},
		}
	);

	return res;
};
