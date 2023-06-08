import { StackContext, Api, use } from "sst/constructs";
import { DbStack } from "./DbStack";

export function ApiStack({ stack }: StackContext) {
  // Create a serverless API
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/index.handler",
      "GET /search": "packages/functions/src/search.handler",
    },
  });

  // Get API tables from DbStack
  const { searchResultsTable } = use(DbStack)

  api.bind([searchResultsTable]);

  // Export values from the stack
  stack.addOutputs({
    ApiEndpoint: api.url
  });

  return { api };
};