import { PodcastResult } from "@/app/interfaces/search.interface";

// podcast component takes a podcast object
const Podcast = (props: { podcast: PodcastResult }) => {
	const { podcast } = props as { podcast: PodcastResult };
	return (
		<div className="basis-1/3 md:basis-1/3">
			<img
				className="rounded-lg"
				src={podcast.artworkUrl100}
				alt={podcast.collectionName}
			/>
			<div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<h2 className="text-2xl font-bold">{podcast.collectionName}</h2>
				<p className="text-xl">{podcast.artistName}</p>
			</div>
		</div>
	);
};

export default Podcast;
