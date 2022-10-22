const { storybook } = require("wo-library/tools/cjs");
const { main } = storybook;

module.exports = {
  ...main,
  stories: ["../!(node_modules|lib)/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
};
