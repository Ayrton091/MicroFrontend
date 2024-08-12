const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3002, // Puerto para la aplicación clima
        historyApiFallback: true,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3002/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'clima',
            filename: 'remoteEntry.js',
            exposes: {
                './ClimaComponent': './src/App',
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
