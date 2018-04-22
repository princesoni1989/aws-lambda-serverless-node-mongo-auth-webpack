import path from "path"
import NodemonPlugin from "nodemon-webpack-plugin";
import nodeExternals from "webpack-node-externals";

const isDev = process.env.NODE_ENV === "development";
console.log(isDev)
module.exports = {
    entry: isDev ? "./handlers/local.js" : "./handlers/lambda",
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, "../build"),
        filename: "lambda.js"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    externals: [isDev ? nodeExternals() : ''],
    mode: isDev ? "development" : "production",
    plugins: [
        ...(isDev ? [new NodemonPlugin()] : [])
    ],
    stats: {
        colors: true,
        timings: true,
    },
}
