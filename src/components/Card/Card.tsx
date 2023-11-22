import { StyledCardContainer } from "./Card.styled";

const Card = ({ url }: { url: string }) => {
	return (
		<StyledCardContainer>
			<img src={url} />
		</StyledCardContainer>
	);
};

export default Card;
