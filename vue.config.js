// eslint-disable-next-line @typescript-eslint/no-var-requires
const { VantResolver } = require("unplugin-vue-components/resolvers");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ComponentsPlugin = require("unplugin-vue-components/webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};
