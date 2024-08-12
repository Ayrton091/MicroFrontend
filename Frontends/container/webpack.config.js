const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                reloj: 'reloj@http://localhost:3001/remoteEntry.js',
                clima: 'clima@http://localhost:3002/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            }
          ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
