import { ApiHandler } from "sst/node/api";
import { ITunes } from "../../core/src/services/itunes.service";
import { ITunesSearchOptions, storeBatchITunesSearchResults } from "@@@app/core/models/itunes.models";
import { jsonResponse } from "@@@app/core/response";

export const handler = ApiHandler(async (_evt) => {
  try {
    // Get the query string parameters
    const query = _evt.queryStringParameters as unknown as ITunesSearchOptions;

    // Search iTunes podcasts
    const podcasts = await ITunes.search({
      term: query.term,
      media: "podcast",
      limit: 20,
    });

    // Search iTunes podcasts episodes
    const episodes = await ITunes.search({
      term: query.term,
      media: "podcast",
      entity: "podcastEpisode",
      limit: 35,
    });

    // Store the search results in the database
    // Patch store 25 records at a time to avoid
    // exceeding the 25 item limit
    //? Take a copy of the results
    const records = [...podcasts.results, ...episodes.results];
    while (records.length > 0) {
      const batch = records.splice(0, 25);
      //? We don't need to wait for this to complete
      storeBatchITunesSearchResults(batch);
    }

    // Return the result as JSON
    return jsonResponse({ body: { podcasts, episodes } });
  } catch (error) {
    // TODO: Log error
    return jsonResponse({ body: error, statusCode: 500 });
  }
});
