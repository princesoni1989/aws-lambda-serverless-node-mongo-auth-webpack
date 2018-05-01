# aws-lambda-serverless-node-mongo-auth-webpack
#### Example Aws lamda function with server less, node, mongo and webpack integration 
## Serverless
This project is based on [serverless framework ](https://serverless.com/framework/ "serverless framework "). It uses [express serverless framework ](https://github.com/awslabs/aws-serverless-express "expres serverless framework ") for creating express based api on aws lambda

## inludes
- Crud api
-  Express js
-  Mongoose
-  Jwt support
-  Webpack
-  Es6


## Get Started
- Clone Project
-  Install serverless module globally `npm install serverless -g`.
-  Configure serverless with your aws credential
 	 `serverless config credentials --provider aws --key xxx --secret xxx`
- Install require dependencies `npm install or npm i `
- To deploy `npm run deploy`
- To run locally `npm run local` (--watch can be be set to run in watch mode)

## Behind The Scenes
###### Serverless will do following task
- It create cloudfront template with required permissions and fields specified in `serverless.yml` and will create code zip.
- It will upload zip(application code) to S3 and create lambda function with it.
- It will create Api Gateway Url with all mappings.
- It will return lambda function url which can be used direct use with no confirugation required.

