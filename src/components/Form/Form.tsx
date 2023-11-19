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
import { main } from "../../app/services/aiApi";

interface FormProps {
	formType: string | undefined | null;
}

type FormValues = {
	prompt: string;
	amount: object;
	resolution: object;
};

const Form: FC<FormProps> = ({ formType }) => {
	const [images, setImages] = useState<string[]>([]);

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

	const onSubmit = (data: object) => {
		main(data);
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
				{formType === "image" && (
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
