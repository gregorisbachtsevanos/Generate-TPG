import { useEffect, FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../Textarea/Textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import SubmitIcon from "../../assets/icons/right-arrow.svg";
import { StyledFormContainer } from "./Form.styled";
import { validationSchema } from "./validationSchema";
import Select from "react-select";
import {
	selectImageResolution,
	selectNumberOfImages,
} from "../../constants/constants";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Card from "../Card";
import { image, videoJsOptions } from "../../features/Chat/constants";
import { generateImage } from "../../app/services/imageAi";
import { generateVideo } from "../../app/services/videoAi";
import Replicate from "replicate";
import { config } from "../../config";
const replicate = new Replicate({
	auth: config.replicateKey,
});

interface FormProps {
	formType: string | undefined | null;
}

type FormValues = {
	prompt: string;
	amount: object;
	resolution: object;
};

const Form: FC<FormProps> = ({ formType }) => {
	const [generatedImage, setGeneratedImage] = useState<null | string>(null);
	const [generatedVideo, setGeneratedVideo] = useState<null | string>(null);

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			prompt: "",
			amount: selectNumberOfImages[0],
			resolution: selectImageResolution[0],
		},
		mode: "onBlur",
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => reset(), [reset, formType]);

	const onSubmit = async ({ prompt }: { prompt: string }) => {
		console.log(prompt);
		const res = await replicate.run(
			"stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
			{
				input: {
					prompt,
				},
			}
		);
		console.log(res);

		// formType === "video" ? generateVideo(data) : generateImage(data);
		// try {
		// 	setImages([]);
		// 	const res = true;
		// 	const urls = res.data.map((image: { url: string }) => image.url);
		// 	setImages(urls);
		// 	reset();
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	return (
		<StyledFormContainer>
			<div className="media-container">
				{formType === "video" ? (
					<VideoPlayer options={videoJsOptions} />
				) : (
					<div className="generated-images">
						<Card url={image} />
					</div>
				)}
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${errors.prompt?.message ? "error" : ""}`}
			>
				<div className="caption-container">
					<Controller
						control={control}
						name="prompt"
						render={({ field: { onChange, value } }) => (
							<Textarea
								onChange={onChange}
								value={value}
								error={errors.prompt?.message}
							/>
						)}
					/>
				</div>
				{/* TODO: remove false to render select to ui */}
				{formType === "image" && false && (
					<div className="select-container">
						<Controller
							control={control}
							name="amount"
							render={({ field: { onChange } }) => (
								<Select
									menuPlacement="top"
									defaultValue={selectNumberOfImages[0]}
									onChange={onChange}
									options={selectNumberOfImages}
								/>
							)}
						/>
						<Controller
							control={control}
							name="resolution"
							render={({ field: { onChange } }) => (
								<Select
									menuPlacement="top"
									defaultValue={selectImageResolution[0]}
									onChange={onChange}
									options={selectImageResolution}
								/>
							)}
						/>
					</div>
				)}
				<div className="btn-container">
					<button className={` `}>
						<img
							src={SubmitIcon}
							width={20}
							height={20}
							alt="submit"
						/>
					</button>
				</div>
			</form>
		</StyledFormContainer>
	);
};

export default Form;
