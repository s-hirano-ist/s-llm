import weaviate, { type WeaviateClient } from "weaviate-client";

const client: WeaviateClient = await weaviate.connectToLocal();

const clientReadiness = await client.isReady();

console.log(clientReadiness); // Should return `true`

client.close(); // Close the client connection
