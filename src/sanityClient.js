import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "xb23z71r",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true
});