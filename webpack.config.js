const path = require('path');
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const iconSizes = [16, 32, 48, 128];

const extendedManifest = {
    icons: {},
    action: {
        default_icon: {},
    },
};
iconSizes.forEach((size) => {
    extendedManifest.icons[size] = `imgs/icon-${size}.png`;
    extendedManifest.action.default_icon[size] = `imgs/icon-${size}.png`;
});

// Icon file
const icon = path.resolve(__dirname, 'src', 'assets', 'icon.png');

const importIcon = iconSizes.map((size) => `${icon}?width=${size}`);

module.exports = (env, argv) => {
    const mode = argv.mode;
    const conf = {
        entry: [path.resolve(__dirname, 'src', 'index.tsx')].concat(importIcon),
        devtool: isProd(mode) ? undefined : 'inline-source-map',
        plugins: [
            new WebpackExtensionManifestPlugin({
                minify: true,
                config: {
                    base: path.resolve(__dirname, 'baseManifest.js'),
                    extend: extendedManifest,
                },
                pkgJsonProps: ['version'],
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                scriptLoading: 'blocking',
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
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'imgs',
                                esModule: false,
                            },
                        },
                        {
                            loader: 'webpack-image-resize-loader',
                            options: {
                                fileLoaderOptionsGenerator: (options, existingOptions) => {
                                    let name;
                                    if (options.width) {
                                        name = `[name]-${options.width}.${options.format}`;
                                    } else {
                                        name = `[name].${options.format}`;
                                    }

                                    return {
                                        ...existingOptions,
                                        name,
                                    };
                                },
                            },
                        },
                    ],
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
