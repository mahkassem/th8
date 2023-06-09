import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { WebStack } from "./stacks/WebStack";
import { DbStack } from "./stacks/DbStack";

export default {
  config(_input) {
    return {
      name: "search-itunes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DbStack)
      .stack(ApiStack)
      .stack(WebStack);
  },
} satisfies SSTConfig;
