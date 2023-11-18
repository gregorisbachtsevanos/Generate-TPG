import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/Sidebar";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { StyledChatContainer } from "./Chat.styled";
import Textarea from "../../components/Textarea/Textarea";
import { useMemo } from "react";

const Chat = () => {
	const [searchParams] = useSearchParams();
	console.log(searchParams.get("type"));
	const isVideoTabActive = useMemo(
		() => searchParams.get("type") === "video",
		[searchParams]
	);
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
					<Textarea />
				</div>
			</StyledChatContainer>
		</MainLayout>
	);
};

export default Chat;
