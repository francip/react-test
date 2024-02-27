const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve:
    {
       extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/public/index.html"),
        }),
    ],
};
