import { StackContext } from "sst/constructs";
import { itunesSearchResults } from "../packages/dynamodb/itunes-search-results.table";

export function DbStack({ stack }: StackContext) {
  // Create DynamoDB table
  const searchResultsTable = itunesSearchResults(stack);

  return {
    searchResultsTable,
  };
}