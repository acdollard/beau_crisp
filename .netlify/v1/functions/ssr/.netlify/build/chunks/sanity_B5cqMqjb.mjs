import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "agaaxyz0",
  dataset: "production",
  apiVersion: "2024-03-08",
  useCdn: true
});

export { client as c };
