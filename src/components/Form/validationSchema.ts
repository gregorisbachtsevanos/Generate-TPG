import * as yup from "yup";

export const validationSchema = yup.object().shape({
	prompt: yup.string().required("* Please provide a caption."),
	// amount: yup
	// 	.mixed()
	// 	.required("* Please select how many images should be generated."),
	// resolution: yup.mixed().required("* Please select the image resolution."),
});
