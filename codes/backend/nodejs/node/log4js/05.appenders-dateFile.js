const log4js = require('log4js');

log4js.configure({
  appenders: {
    app: {
      type: 'dateFile',
      filename: './logs/app.log',
      pattern: 'yyyy-MM-dd-hh-mm-ss'  // 秒级
    },
  },
  categories: {
    default: {
      appenders: ['app'],
      level: 'info'
    },
  },
});

const logger = log4js.getLogger();

setTimeout(() => logger.info(1), 0);
setTimeout(() => logger.warn(2), 1000);
setTimeout(() => logger.error(3), 2000);
setTimeout(() => logger.error(4), 3000);
setTimeout(() => logger.error(5), 4000);

/* 输出：

logs/
  access-log.log
  access-log.log.1
  access-log.log.2

 */
