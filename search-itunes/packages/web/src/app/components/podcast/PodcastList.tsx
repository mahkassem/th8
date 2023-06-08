import { PodcastResult } from "@/app/interfaces/search.interface";
import Podcast from "./Podcast";

// podcast list component takes a PodcastResult array
const PodcastList = ({ podcasts }: { podcasts: PodcastResult[] }) => {
	return (
		<div className="flex flex-row">
			{podcasts.map((podcast: PodcastResult) => (
				<Podcast podcast={podcast} key={podcast.trackId} />
			))}
		</div>
	);
};

export default PodcastList;