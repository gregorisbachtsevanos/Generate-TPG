import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/Sidebar";
import MainLayout from "../../layout/MainLayout/MainLayout";
import { StyledChatContainer } from "./Chat.styled";

const Chat = () => {
	return (
		<MainLayout withoutPadding>
			<StyledChatContainer>
				<Sidebar />
				<div className="tabs-container">
					<Button as="Tab" styleType="ghost">
						Image TPG
					</Button>
					<Button as="Tab" styleType="ghost">
						Video TPG
					</Button>
				</div>
			</StyledChatContainer>
		</MainLayout>
	);
};

export default Chat;
