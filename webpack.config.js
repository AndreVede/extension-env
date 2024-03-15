const path = require('path');
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const mode = argv.mode;
    const conf = {
        entry: { index: path.resolve(__dirname, 'src', 'index.tsx') },
        devtool: isProd(mode) ? undefined : 'inline-source-map',
        plugins: [
            new WebpackExtensionManifestPlugin({
                minify: true,
                config: {
                    base: path.resolve(__dirname, 'baseManifest.js'),
                },
                pkgJsonProps: ['version'],
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        'babel-loader',
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.resolve(__dirname, 'tsconfig.json'),
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(svg|png|jpg|gif|webp)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'imgs',
                            esModule: false,
                        },
                    },
                },
                {
                    test: /\.(aac|mp3)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'audio',
                            esModule: false,
                        },
                    },
                },
                {
                    test: /\.(webm|mp4)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'video',
                            esModule: false,
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: { '@src': path.resolve(__dirname, 'src') },
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        watchOptions: {
            ignored: /node_modules/,
        },
    };
    return conf;
};

const isProd = (mode) => {
    return mode === 'production';
};
