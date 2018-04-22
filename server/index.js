import  express from  "express"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from 'mongoose';
import awsServerlessExpressMiddleware from  "aws-serverless-express/middleware"

import Api from './router';

mongoose.Promise = Promise;
mongoose.connect("mongodb://reactapp:reactapp@ds161039.mlab.com:61039/reaactapp");
const app = express()

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use(awsServerlessExpressMiddleware.eventContext())
app.options('*', cors())

app.use('/api', Api);

export default app
