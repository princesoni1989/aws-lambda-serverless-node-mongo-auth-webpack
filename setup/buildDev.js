import webpack from "webpack";
import webpackConfig from "./webpack.config";

async function build() {
    webpack(webpackConfig).watch({
        aggregateTimeout: 300,
        poll: undefined
    }, (err, status) => {
        console.log(status.toString(webpackConfig.stats));
        if (status.hasErrors()) {
            return new Error("Webpack compilation Error");
        }
    })
}

build()
