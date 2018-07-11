const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};

const client = {
  entry: `${SRC_DIR}/client.js`,
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
};

const server = {
  entry: `${SRC_DIR}/server.js`,
  target: 'node',
  output: {
    path: DIST_DIR,
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  { ...common, ...client },
  { ...common, ...server }
];