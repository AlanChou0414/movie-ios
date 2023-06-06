module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      }],
      ["module-resolver", {
        "alias": {
          "@Components": "./app/components",
          "@Styles": "./assets/css",
          "@Icon": "./assets/img",
          "@Hooks": "./app/hooks",
          "@Types": "./app/types",
          "@Enum": "./app/enum",
          "@Path": "./app/constants/path",
          "@Utils": "./app/utils",
          "@Screens": "./app/screens",
          "@Navigation": "./app/navigation",
          "@Store": "./app/store",
          "@Slice": "./app/slice"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};