import React, { FC } from "react";
import { StyledPageLayout } from "./PageLayout.styled";

interface PageLayoutProps {
	withoutPadding?: boolean;
	children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return <StyledPageLayout>{children}</StyledPageLayout>;
};

export default PageLayout;
