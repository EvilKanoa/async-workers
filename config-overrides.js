const { override, addWebpackModuleRule, tap } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.worker\.ts$/,
    loaders: [
      "worker-loader",
      {
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.worker.json"
        }
      }
    ]
  })
);
