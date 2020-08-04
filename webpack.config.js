const config =
  process.env.ENV === 'production'
    ? require('./webpack.config.prod')
    : require('./webpack.config.dev');

module.exports = config;
