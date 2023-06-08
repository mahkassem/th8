"use client";

import { SearchResult } from "@/app/interfaces/search.interface";
import { useState } from "react";
import PodcastList from "@/app/components/podcast/PodcastList";
import EpisodList from "./components/episod/EpisodList";

const getSearchResults = async (term: string): Promise<SearchResult> => {
	// from next api
	try {
		const res = await fetch(`/api/search?term=${term}`, {
			next: { revalidate: 300 },
		});
		const json = await res.json();
		return json as SearchResult;
	} catch (error) {
		return {} as SearchResult;
	}
};

const AboutPage = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<SearchResult>({} as SearchResult);
	const [podcasts, setPodcasts] = useState({ results: [], resultCount: 0 });
	const [episodes, setEpisodes] = useState({ results: [], resultCount: 0 });

	const handleSearch = async () => {
		const results = await getSearchResults(search);
		setResults(results);
		// set podcasts or set default { results: [], resultCount: 0 }
		setPodcasts(results.podcasts || { results: [], resultCount: 0 });
		// set episodes or set default { results: [], resultCount: 0 }
		setEpisodes(results.episodes || { results: [], resultCount: 0 });
	};

	return (
		<>
			{/* use TailwindCSS */}
			{/* App header with search bar */}
			<br></br>
			<div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<input
					className="border border-gray-400 rounded-lg px-4 py-2 w-full"
					type="text"
					placeholder="Search iTunes"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
			{/* Slideshow with scroll for podcasts */}
			{podcasts && podcasts.results && (
				<PodcastList podcasts={podcasts.results} />
			)}
			{/* Grid list 3 cols for expisods */}
			{episodes && episodes.results && (
				<EpisodList episods={episodes.results} />
			)}
		</>
	);
};

export default AboutPage;
