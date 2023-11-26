import { useEffect, FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../Textarea/Textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import SubmitIcon from "../../assets/icons/right-arrow.svg";
import { StyledFormContainer } from "./Form.styled";
import { validationSchema } from "./validationSchema";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Card from "../Card";
import { image, videoJsOptions } from "../../features/Chat/constants";
import { useGenerateImageQuery } from "../../app/services/generateAi";
// import Replicate from "replicate";
// import { config } from "../../config";
// const replicate = new Replicate({
// 	auth: config.replicateKey,
// });

interface FormProps {
	formType: string | undefined | null;
}

type FormValues = {
	prompt: string;
};

const Form: FC<FormProps> = ({ formType }) => {
	// const [generatedImage, setGeneratedImage] = useState<null | string>(null);
	const [prompt, setPrompt] = useState<null | string>(null);

	const { data, error, isLoading } = useGenerateImageQuery(prompt ?? "", {
		skip: Boolean(!prompt),
	});

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			prompt: "",
		},
		mode: "onBlur",
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => reset(), [reset, formType]);

	const onSubmit = ({ prompt }: FormValues) => {
		console.log(prompt);
		setPrompt(prompt);
		// generateImage(prompt);
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
				{/* {formType === "image" && false && (
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
				)} */}
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
