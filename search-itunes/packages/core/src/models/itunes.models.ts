import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  BatchWriteCommand,
} from "@aws-sdk/lib-dynamodb";
import { Table } from "sst/node/table";

export type ITunesSearchOptions = {
  term: string;
  media?: string;
  entity?: string;
  limit?: number;
};

export type ITunesSearchResponse = {
  resultCount: number;
  results: Array<ITunesSearchResult>;
};

export type ITunesSearchResult = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
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
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: Array<string>;
  genres: Array<string>;
}

// store multiple records
export const storeBatchITunesSearchResults = async (records: Array<ITunesSearchResult>): Promise<void> => {
  try {
    const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
    const params = {
      RequestItems: {
        [Table.search_results.tableName]: records.map((record) => ({
          PutRequest: {
            Item: record,
          },
        })),
      },
    };
    await db.send(new BatchWriteCommand(params));
  } catch (error) {
    // TODO: Log error
  }
}
