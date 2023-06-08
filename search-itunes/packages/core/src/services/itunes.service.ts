import { ITunesSearchOptions, ITunesSearchResponse } from "../models/itunes.models";
import fetch from "node-fetch";

export class ITunes {
  // The base URL for the iTunes API
  static baseUrl = "https://itunes.apple.com/search";

  // Search iTunes for a term, with optional search options: media, entity, and limit.
  static async search(opt?: ITunesSearchOptions): Promise<ITunesSearchResponse> {
    try {
      // Required parameters validation
      if (!opt?.term) throw new Error("A search term is required.");

      // Create a new URL object with the base URL
      const url = new URL(this.baseUrl);

      // Append the term query parameter
      url.searchParams.append("term", opt.term);

      // Append optional query parameters
      if (opt?.media) url.searchParams.append("media", opt.media);
      if (opt?.entity) url.searchParams.append("entity", opt.entity);
      if (opt?.limit) url.searchParams.append("limit", opt.limit.toString());

      // Validate media values
      if (opt?.media && !["movie", "podcast", "music", "musicVideo", "audiobook", "shortFilm", "tvShow", "software", "ebook", "all"].includes(opt.media))
        throw new Error("Invalid media value.");

      // Fetch the data
      const response = await fetch(url);

      // Parse the data as JSON
      const data = await response.json();

      // Return the data
      return data as ITunesSearchResponse;
    } catch (error) {
      // TODO: Log error
      throw error;
    }
  }
}