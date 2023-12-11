import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/Sidebar";
import { StyledChatContainer } from "./Chat.styled";
import { useEffect, useMemo, useState } from "react";
import Form from "../../components/Form";
import PageLayout from "../../layout/PageLayout/PageLayout";

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
		<PageLayout>
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
					{/* <div className="media-container">
						{formType === "video" ? (
							<VideoPlayer options={videoJsOptions} />
						) : (
							<div className="generated-images">
								<Card url={image} />
							</div>
						)}
					</div> */}
					{formType === "image" ? (
						<Form formType={formType} />
					) : (
						<Form formType={formType} />
					)}
				</div>
			</StyledChatContainer>
		</PageLayout>
	);
};

export default Chat;
