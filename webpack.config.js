module.exports = {
    context: __dirname,
    entry: `./sources/index.ts`,
    output: {
        filename: `build/index.js`,
    },
    resolve: {
        // crash if uncommented
        // symlinks: false,
        extensions: [`.ts`, `.js`],
        // works even if uncommmented
        // plugins: [require('pnp-webpack-plugin')],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: `ts-loader`,
        }],
    }
}
