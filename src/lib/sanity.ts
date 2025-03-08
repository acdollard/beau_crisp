import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "agaaxyz0",
  dataset: "production",
  apiVersion: "2024-03-08",
  useCdn: true,
}); 