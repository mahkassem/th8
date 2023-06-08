"use client";

import {
	EpisodeResult,
	PodcastResult,
	SearchResult,
} from "@/app/interfaces/search.interface";
import { useState } from "react";

const getSearchResults = async (term: string): Promise<SearchResult> => {
	// from next api
	try {
		const res = await fetch(`/api/search?term=${term}`);
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
			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
					<h1 className="text-6xl font-bold">Search iTunes</h1>
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
					<div className="flex flex-row items-center justify-center flex-1 px-20 text-center">
						<div className="flex flex-row items-center justify-center flex-1 px-20 text-center">
							{podcasts.results.map((podcast: PodcastResult) => (
								<div
									className="flex flex-col items-center justify-center flex-1 px-20 text-center"
									key={podcast.trackId}
								>
									<img
										className="w-1/2 h-1/2 rounded-full"
										src={podcast.artworkUrl600}
										alt={podcast.collectionName}
									/>
									<h1 className="text-2xl font-bold">
										{podcast.collectionName}
									</h1>
									<h2 className="text-xl">{podcast.artistName}</h2>
									<p className="text-lg">{podcast.primaryGenreName}</p>
								</div>
							))}
						</div>
					</div>
					{/* Grid list 3 cols for expisods */}
				</main>
			</div>
		</>
	);
};

export default AboutPage;
