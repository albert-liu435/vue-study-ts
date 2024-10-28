export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["> 1%", "last 10 versions"],
    },
    "postcss-pxtorem": {
      rootValue: 100,
      propList: ["*"],
      minPixelValue: 0,
      selectorBlackList: [":root", "html", "body"],
    },
  },
};
