import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

function devServerConfig() {
    return {
        port: 8080,
    };
}

function config() {
    return {
        entry: "./src/index.tsx",
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
        },
        output: {
            path: path.join(process.cwd(), "/dist"),
            filename: "bundle.js",
        },
        devServer: devServerConfig(),
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
                    loader: "ts-loader",
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(process.cwd(), "/public/index.html"),
            }),
        ],
    };
}

export default config;