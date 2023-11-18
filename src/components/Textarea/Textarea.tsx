import { StyledTextareaContainer } from "./Textarea.styled";
import Button from "../Button";
import SendIcon from "../../assets/icons/right-arrow.svg";

const Textarea = () => {
	return (
		<StyledTextareaContainer>
			<div
				className="textarea"
				contentEditable
				placeholder="Leave a comment here"
			></div>
			<Button styleType="ghost" size="small" withOutPadding>
				<img src={SendIcon} width={20} height={20} alt="submit" />
			</Button>
		</StyledTextareaContainer>
	);
};

export default Textarea;
