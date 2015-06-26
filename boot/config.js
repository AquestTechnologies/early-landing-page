
// # config

var path = require('path');
var parentDir = path.join(__dirname, '..');
var appDir = path.join(parentDir, 'app');
var pkg = require(path.join(parentDir, 'package'));
var assetsDir = path.join(parentDir,'assets');
var publicDir = path.join(assetsDir, 'public');
var viewsDir = path.join(appDir, 'views');
var maxAge = 24 * 60 * 60 * 1000;
var env = process.env;

exports = module.exports = function() {

  return {

    defaults: {
      pageTitle: 'Gulp AWS Splash',
      pageDescription: 'The open-source LaunchRock alternative',
      googleAnalytics: env.GA || 'UA-64548308-1',
      mailChimp: {
        actionUrl: env.MC_AU || '//aquest.us11.list-manage.com/subscribe/post?u=f496e12e502c71af1e3b19914&amp;id=621bddd7d2',
        hiddenInputName: env.MC_HIN || 'b_f496e12e502c71af1e3b19914_621bddd7d2'
      },
      aws: {
        key: env.AWS_KEY || 'AKIAI2CMF6I4NO6HEV4A',
        accessKeyId: env.AWS_KEY || 'AKIAI2CMF6I4NO6HEV4A',
        secret: env.AWS_SECRET || '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',
        secretAccessKey: env.AWS_SECRET || '9L4WnnNCOjYYEVOQMyN4qbrMTCg7SurTOHO/+SUr',
        distributionId: env.AWS_DI || 'E2YLV0IMIU4UQP',
        patternIndex: /^\/index\-[a-f0-9]+\.html(\.gz)*$/gi,
        params: {
          Bucket: env.AWS_BUCKET || 'early-landing-page'
        }
      },
      pkg: pkg,
      showStack: true,
      assetsDir: assetsDir,
      publicDir: publicDir,
      views: {
        dir: viewsDir,
        engine: 'jade'
      },
      trustProxy: true,
      staticServer: {
        maxAge: maxAge
      },
      url: 'http://localhost:3000',
      server: {
        host: '0.0.0.0',
        cluster: false,
        env: 'development',
        port: 3000,
        ssl: {
          enabled: false,
          options: {}
        }
      },
      output: {
        handleExceptions: false,
        colorize: true,
        prettyPrint: false
      },
      logger: {
        'console': true,
        requests: true,
        mongo: false,
        file: false,
        hipchat: false,
        slack: false
      },
      less: {
        path: publicDir,
        options: {
          force: true
        }
      }
    },

    development: {},
    test: {}

  };

};

exports['@singleton'] = true;
