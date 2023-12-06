import express from "express";
import cors from 'cors';

import Replicate from "replicate";

const replicate = new Replicate({
	auth: 'r8_LpIfovNTW9GoBwkadO0oDI1czAsXClV3QmkXP',
});

const app = express();
const port = 3001;
app.use(cors());

app.get("/image-generator", async (req, res) => {
	const { query } = req

	// return console.log(query.prompt)
	const response = await replicate.run(
		"stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
		{
			input: {
				prompt: query.prompt,
			},
		}
	);
	res.send({ message: "Image generator", response });
});

app.get("/video-generator", async (req, res) => {
	const { query } = req
	const response = await replicate.run(
		"anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
		{
			input: {
				prompt: query.prompt,
			},
		}
	);
	res.send({ message: "Video generator", response });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
