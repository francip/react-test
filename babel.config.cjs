function config(api) {
    api.cache(true);
    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
        ],
    };
}

module.exports = config;
