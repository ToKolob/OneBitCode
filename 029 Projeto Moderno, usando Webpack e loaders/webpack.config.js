const path = require('path');

module.exports = {
  devServer: {
    static: 'dist'
  },
  entry: './src/index.js', // Seu ponto de entrada JavaScript
  output: {
    filename: '[name].min.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile todos os arquivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use o babel-loader para transpilar
        },
      },
      {
        test: /\.css$/, // Processar arquivos CSS
        use: ["style-loader", "css-loader"], // Use style-loader e css-loader
      },
    ],
  },
};
