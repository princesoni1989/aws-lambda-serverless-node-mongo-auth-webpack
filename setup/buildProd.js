import fs from 'fs-magic';
import webpack from "webpack";

import webpackConfig from "./webpack.config";
import pkg from "../package.json";

async function bundle() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig).run((err, status) => {
            if (err) return reject(err);
            console.log(status.toString(webpackConfig.stats));
            if (status.hasErrors()) {
                return new Error("Webpack compilation Error");
            }
            return resolve();
        });
    });
}

async function remove() {
    if(await fs.exists('build')){
        await fs.rmrf("build");
    }
}

async function copy() {
    await fs.copy("serverless.yml", "build/serverless.yml")
    await fs.writeFile("build/package.json",
        JSON.stringify({
            private: true,
            dependencies: pkg.dependencies,
        }, null, 2),
        'utf8',
    );
}

async function build() {
    await remove();
    await bundle();
    await copy();
}

build();
