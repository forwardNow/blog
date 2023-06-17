const log4js = require('log4js');

/*
  将日志同时输出到控制台和文件
 */
log4js.configure({
  appenders: {
    out: {
      type: 'stdout'
    },
    app: {
      type: 'file',
      filename: './logs/app.log'
    },
  },
  categories: {
    default: {
      appenders: ['out', 'app'],
      level: 'debug'
    },
  },
});

const logger = log4js.getLogger();
logger.info('hello, log4js');
