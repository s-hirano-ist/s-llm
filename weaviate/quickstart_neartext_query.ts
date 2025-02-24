import weaviate, { type WeaviateClient } from "weaviate-client";

const client: WeaviateClient = await weaviate.connectToLocal();

const questions = client.collections.get("Question");

const result = await questions.query.nearText("biology", {
	limit: 2,
});

for (const item of result.objects) {
	console.log(JSON.stringify(item.properties, null, 2));
}

client.close(); // Close the client connection
