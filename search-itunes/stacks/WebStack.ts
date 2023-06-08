import { StackContext, NextjsSite, Bucket, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";

export function WebStack({ stack }: StackContext) {
  // Get API from ApiStack
  const { api } = use(ApiStack);

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    environment: {
      API_URL: api.url,
    },
  });

  // Export values from the stack
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
