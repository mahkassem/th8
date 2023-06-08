import { EpisodeResult } from "@/app/interfaces/search.interface";

// episod component takes a episod object
const Episod = (props: { episod: EpisodeResult }) => {
	const { episod } = props as { episod: EpisodeResult };
	return (
		<div className="flex-col items-center justify-center text-center">
			<img
				className="rounded-lg"
				src={episod.artworkUrl160}
				alt={episod.collectionName}
			/>
			<div className="flex-col items-center justify-center flex-1 px-20 text-center">
				<h2 className="text-2xl font-bold">{episod.collectionName}</h2>
				<p className="text-xl">{episod.trackName}</p>
			</div>
		</div>
	);
};

export default Episod;
