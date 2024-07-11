import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '24b1f6ea533ee37ba3acab36c267748b626eb469', queries,  });
export default client;
  