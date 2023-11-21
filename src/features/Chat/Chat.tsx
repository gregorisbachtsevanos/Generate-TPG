import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/Sidebar";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { StyledChatContainer } from "./Chat.styled";
import { useEffect, useMemo, useState } from "react";
import Form from "../../components/Form";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Card from "../../components/Card";

const videoJsOptions = {
	sources: [
		{
			src: "//vjs.zencdn.net/v/oceans.mp4",
			type: "video/mp4",
		},
	],
};

const Chat = () => {
	const image =
		"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700524800&semt=sph";
	const [searchParams] = useSearchParams();
	const [formType, setFormType] = useState<string | null>("image");

	useEffect(
		() =>
			setFormType(
				searchParams.get("type") ? searchParams.get("type") : "image"
			),
		[searchParams]
	);

	const isVideoTabActive = useMemo(() => formType === "video", [formType]);

	return (
		<MainLayout withoutPadding>
			<StyledChatContainer>
				<Sidebar />
				<div className="chat-body">
					<div className="tabs-container">
						<Link to="?type=image">
							<Button
								as="Tab"
								styleType="ghost"
								className={`${
									isVideoTabActive ? "" : "active"
								}`}
							>
								Image TPG
							</Button>
						</Link>
						<Link to="?type=video">
							<Button
								as="Tab"
								styleType="ghost"
								className={`${
									isVideoTabActive ? "active" : ""
								}`}
							>
								Video TPG
							</Button>
						</Link>
					</div>
					<div className="media-container">
						{formType === "video" ? (
							<VideoPlayer options={videoJsOptions} />
						) : (
							<div className="generated-images">
								<Card url={image} />

								<Card url={image} />
								<Card url={image} />
								<Card url={image} />
							</div>
						)}
					</div>
					{formType === "image" ? (
						<Form formType={formType} />
					) : (
						<Form formType={formType} />
					)}
				</div>
			</StyledChatContainer>
		</MainLayout>
	);
};

export default Chat;
