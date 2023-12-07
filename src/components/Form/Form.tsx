import { useEffect, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../Textarea/Textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import SubmitIcon from "../../assets/icons/right-arrow.svg";
import { StyledFormContainer } from "./Form.styled";
import { validationSchema } from "./validationSchema";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Card from "../Card";
import {
	useLazyGenerateImageQuery,
	useLazyGenerateVideoQuery,
} from "../../app/services/generateAi";
import Loader from "../Loader";

interface FormProps {
	formType: string | undefined | null;
}

type FormValues = {
	prompt: string;
};

const Form: FC<FormProps> = ({ formType }) => {
	const [
		generateImage,
		{
			data: generatedImage,
			isLoading: isGeneratedImageLoading,
			isSuccess: isGeneratedImageSuccess,
		},
	] = useLazyGenerateImageQuery();

	const [
		generateVideo,
		{
			data: generatedVideo,
			isLoading: isGeneratedVideoLoading,
			isSuccess: isGeneratedVideoSuccess,
		},
	] = useLazyGenerateVideoQuery();

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
		formType === "video" ? generateVideo(prompt) : generateImage(prompt);
	};

	return (
		<StyledFormContainer>
			{(isGeneratedImageLoading || isGeneratedVideoLoading || true) && (
				<Loader />
			)}
			{(isGeneratedImageSuccess || isGeneratedVideoSuccess) && (
				<div className="media-container">
					{formType === "video" ? (
						<VideoPlayer
							options={{
								sources: [
									{
										src: generatedVideo?.response[0],
										type: "video/mp4",
									},
								],
							}}
						/>
					) : (
						<div className="generated-images">
							<Card url={generatedImage?.response[0]} />
						</div>
					)}
				</div>
			)}
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
