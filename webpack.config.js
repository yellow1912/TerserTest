const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry:
        { build: './entry.js' },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
            }),
        ],
    },
    target: () => undefined
};
