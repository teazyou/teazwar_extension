module.exports = {
  plugins: ["@babel/plugin-transform-runtime"],
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      }],
  ],
  sourceType: "unambiguous",
}
