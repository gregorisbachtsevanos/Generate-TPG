import { FC, useRef } from "react";
import { StyledTextareaContainer } from "./Textarea.styled";

interface TextareaProps {
	onChange: (value: string) => void;
	error?: string;
	value?: string;
}

const Textarea: FC<TextareaProps> = ({ onChange, error, value }) => {
	const divRef = useRef<HTMLDivElement>(null);

	const handleBlur = () => {
		if (divRef.current) {
			onChange(divRef.current.innerHTML);
		}
	};

	return (
		<StyledTextareaContainer>
			<div
				className="caption"
				contentEditable
				onBlur={handleBlur}
				ref={divRef}
				dangerouslySetInnerHTML={{ __html: value || "" }}
			/>
			{error && <p className="error">{error}</p>}
		</StyledTextareaContainer>
	);
};

export default Textarea;
