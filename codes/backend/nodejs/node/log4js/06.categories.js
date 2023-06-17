const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {
      type: 'stdout'
    },
    app: {
      type: 'file',
      filename: 'logs/app.log'
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'trace'
    },
    app: {
      // 同时输出到 out、app appender
      appenders: ['out', 'app'],
      level: 'info'
    },
  },
});

const defaultLogger = log4js.getLogger();
defaultLogger.debug('defaultLogger');

const appLogger = log4js.getLogger('app');
appLogger.info('appLogger');
