module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // compile against the current node version
        },
      },
    ],
    "@babel/preset-typescript", // if you use TypeScript
  ],
};
