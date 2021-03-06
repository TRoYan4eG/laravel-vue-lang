const mix = require('laravel-mix');

class LangExtension {

  register(lang) {
    this.lang = lang || './resources/lang';
  }

  webpackRules() {
    return {
      test: /resources[\\\/]lang.+\.(php|json)$/,
      loader: 'laravel-localization-loader',
    }
  }

  webpackConfig(webpackConfig) {
    webpackConfig.resolve.alias = webpackConfig.resolve.alias || {};
    webpackConfig.resolve.alias['@lang'] = path.resolve('./resources/lang');
  }
}

mix.extend('lang', new LangExtension());
