import awsServerlessExpress from "aws-serverless-express";
import  app from "../server";

const serverLess = awsServerlessExpress.createServer(app);

export const server = (event, context) => awsServerlessExpress.proxy(serverLess, event, context)
