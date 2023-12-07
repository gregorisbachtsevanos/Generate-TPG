import { StyledLoaderContainer } from "./Loader.styled";

const Loader = () => {
	return (
		<StyledLoaderContainer>
			<div className="loader">
				<div></div>
				<div></div>
			</div>
			<p>Let me think...</p>
		</StyledLoaderContainer>
	);
};

export default Loader;
