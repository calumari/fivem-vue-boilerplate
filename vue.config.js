module.exports = {
  chainWebpack: config => {
    config.plugin('preload').tap(args => {
      args[0].fileBlacklist.push(/\.css/, /\.js/);
      return args;
    });

    config
      .plugin('inline-source')
      .use(require('html-webpack-inline-source-plugin'));

    config.plugin('html').tap(args => {
      args[0].inlineSource = '.(js|css)$';
      return args;
    });

    config.module
      .rule('ifdef')
      .test(/\.(vue|js)?$/)
      .exclude.add(/node_modules/)
      .end()
      .use(`ifdef-loader`)
      .loader('ifdef-loader')
      .options({
        DEBUG: process.env.NODE_ENV !== 'production',
        version: 3,
        'ifdef-verbose': true, // add this for verbose output
        'ifdef-triple-slash': true, // add this to use double slash comment instead of default triple slash
      })
      .end();
  },
};
