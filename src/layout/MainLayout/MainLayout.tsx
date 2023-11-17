import React, { FC } from "react";
import { StyledMainLayout } from "./MainLayout.styled";

interface MainLayoutProps {
	withoutPadding?: boolean;
	children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ withoutPadding, children }) => {
	return (
		<StyledMainLayout className={`${withoutPadding ? "noPadding" : ""}`}>
			{children}
		</StyledMainLayout>
	);
};

export default MainLayout;
