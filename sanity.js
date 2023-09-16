import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: "b6uhkr4h",
	dataset: "production",
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: "2023-09-15",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
