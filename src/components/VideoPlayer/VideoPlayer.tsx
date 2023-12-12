//@ts-nocheck
import * as React from "react";
import videojs from "video.js";

import "video.js/dist/video-js.css";
import { StyledVideoPlayerContainer } from "./VideoPlayer.styled";

interface IVideoPlayerProps {
	options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
	controls: true,
	fluid: true,
	controlBar: {
		volumePanel: {
			inline: false,
		},
	},
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
	const videoNode = React.useRef<HTMLVideoElement>();
	const player = React.useRef<videojs.Player>();

	React.useEffect(() => {
		player.current = videojs(videoNode.current, {
			...initialOptions,
			...options,
		}).ready(function () {});
		return () => {
			if (player.current) {
				player.current.dispose();
			}
		};
	}, [options]);

	return (
		<StyledVideoPlayerContainer className="video" data-vjs-player>
			<video ref={videoNode} className="video-js" />
		</StyledVideoPlayerContainer>
	);
};

export default VideoPlayer;
