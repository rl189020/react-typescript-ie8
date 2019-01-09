module.exports = {
    entry: {
        app: "./src/index.tsx",
        vender: 'babel-polyfill'
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", "json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: [
                    "source-map-loader",
                    {
                        loader: 'es3ify-loader'
                    }
                ],
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'es3ify-loader'
                    }
                ]
            }
        ]
    }
}