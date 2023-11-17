import AiLogo from "../../assets/images/ai-logo.png";
import { StyledImageContainer, StyledPageContainer } from "./Landing.styled";
import { Link } from "react-router-dom";
import { Title, Title2Xl, TitleXl } from "../../assets/styles/theme";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import MainLayout from "../../layout/MainLayout/MainLayout";
import PlayIcon from "../../assets/icons/play.svg";
import LineIcon from "../../assets/icons/line.svg";

const Landing = () => {
	return (
		<MainLayout>
			<Navbar />
			<StyledImageContainer>
				<img src={AiLogo} width={900} height={900} alt="ai-logo" />
			</StyledImageContainer>
			<StyledPageContainer>
				<div className="title">
					<TitleXl>Video and Image</TitleXl>
					<Title2Xl>AI-Generated System</Title2Xl>
				</div>
				<div className="btn">
					<Link to="/chat">
						<Button
							styleType="ghost"
							size={"small"}
							onClick={() => true}
						>
							<img
								src={PlayIcon}
								width={20}
								height={20}
								alt="ai-logo"
							/>
							<img
								src={LineIcon}
								width={20}
								height={20}
								alt="ai-logo"
							/>
							Let&apos;s demo
						</Button>
					</Link>
				</div>
				<div className="caption">
					<Title>
						Our platform seamlessly generates mesmerizing videos and
						stunning images, revolutionizing the way you bring ideas
						to life.
					</Title>
				</div>
			</StyledPageContainer>
		</MainLayout>
	);
};

export default Landing;
