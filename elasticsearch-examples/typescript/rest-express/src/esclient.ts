import { Client } from "@elastic/elasticsearch";

const client = new Client({ node: "http://10.12.196.158:9200" });
const info = await client.info();

export default info;
