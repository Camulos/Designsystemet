const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./cjs/index.js",
  output: {
    filename: "bundle.js", // <-- Important
    libraryTarget: "this", // <-- Important
  },
  target: "node", // <-- Important
  resolve: {
    extensions: [".js"],
  },
  externals: [
    nodeExternals({
      /* Check for deps from package.json */
      /* modulesFromFile: true,
      allowlist: ["@navikt/ds-icons"], */
    }),
  ], // <-- Important
};
