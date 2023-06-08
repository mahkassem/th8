export interface SearchResult {
  podcasts: Podcast;
  episodes: Episode;
}

export interface Episode {
  resultCount: number;
  results: EpisodeResult[];
}

export interface EpisodeResult {
  country: Country;
  collectionViewUrl: string;
  trackTimeMillis: number;
  artworkUrl160: string;
  closedCaptioning: ClosedCaptioning;
  collectionId: number;
  collectionName: string;
  artistIds: number[];
  genres: Genre[];
  episodeGuid: string;
  description: string;
  releaseDate: string;
  shortDescription: string;
  artworkUrl600: string;
  trackName: string;
  trackId: number;
  feedUrl: string;
  episodeUrl: string;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl60: string;
  artistViewUrl?: string;
  trackViewUrl: string;
  previewUrl: string;
  episodeContentType: EpisodeContentType;
  episodeFileExtension: EpisodeFileExtension;
  kind: EpisodeKind;
  wrapperType: EpisodeWrapperType;
}

export enum ClosedCaptioning {
  None = "none",
}

export enum ContentAdvisoryRating {
  Clean = "Clean",
  Explicit = "Explicit",
}

export enum Country {
  Usa = "USA",
}

export enum EpisodeContentType {
  Audio = "audio",
}

export enum EpisodeFileExtension {
  M4A = "m4a",
  Mp3 = "mp3",
}

export interface Genre {
  name: string;
  id: string;
}

export enum EpisodeKind {
  PodcastEpisode = "podcast-episode",
}

export enum EpisodeWrapperType {
  PodcastEpisode = "podcastEpisode",
}

export interface Podcast {
  resultCount: number;
  results: PodcastResult[];
}

export interface PodcastResult {
  wrapperType: PodcastWrapperType;
  kind: PodcastKind;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: CollectionExplicitness;
  trackExplicitness: TrackExplicitness;
  trackCount: number;
  trackTimeMillis: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
}

export enum CollectionExplicitness {
  NotExplicit = "notExplicit",
}

export enum Currency {
  Usd = "USD",
}

export enum PodcastKind {
  Podcast = "podcast",
}

export enum TrackExplicitness {
  Cleaned = "cleaned",
  Explicit = "explicit",
}

export enum PodcastWrapperType {
  Track = "track",
}
