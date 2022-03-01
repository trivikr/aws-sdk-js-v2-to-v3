import AWS from "aws-sdk";

const region = "us-west-2";
const client = new AWS.DynamoDB({ region });
const response = await client.listTables({}).promise();
