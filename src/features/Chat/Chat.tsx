import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/Sidebar";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { StyledChatContainer } from "./Chat.styled";
import { useEffect, useMemo, useState } from "react";
import Form from "../../components/Form";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const videoJsOptions = {
	sources: [
		{
			src: "//vjs.zencdn.net/v/oceans.mp4",
			type: "video/mp4",
		},
	],
};

const Chat = () => {
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
					{formType === "video" ? (
						<VideoPlayer options={videoJsOptions} />
					) : (
						"image"
					)}
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
