const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./cjs/index.js",
  output: {
    filename: "bundle.js", // <-- Important
    libraryTarget: "this", // <-- Important
  },
  /* target: "node", // <-- Important */
  resolve: {
    extensions: [".js"],
  },
  externals: [
    /* Fjerner node-module imports fra bundle, slik at eks react ikke blir bundlet med */
    nodeExternals({
      /* modulesDir: "./node_modules",
      additionalModuleDirs: ["../../../node_modules"], */
      /* modulesFromFile: true, */
      /* Check for deps from package.json */
      /* ,
       */
      allowlist: ["@navikt/ds-icons"],
      /* modulesFromFile: {
        includeInBundle: ["crypto"],
      }, */
    }),
  ],
};
