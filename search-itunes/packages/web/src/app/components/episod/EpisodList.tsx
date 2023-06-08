import { EpisodeResult } from "@/app/interfaces/search.interface";
import Episod from "./Episod";

// episod list component takes a EpisodResult array
const EpisodList = ({ episods }: { episods: EpisodeResult[] }) => {
	return (
		<div className="flex flex-row">
			{episods.map((episod: EpisodeResult) => (
				<Episod episod={episod} key={episod.trackId} />
			))}
		</div>
	);
};

export default EpisodList;
