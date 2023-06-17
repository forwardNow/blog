const log4js = require('log4js');

log4js.configure({
  appenders: {
    app: {
      type: 'dateFile',
      filename: './logs/app.log',
      pattern: 'yyyy-MM-dd-hh-mm-ss',  // 秒级
      keepFileExt: true, // file.log.2017-05-30 -> file.2017-05-30.log
      alwaysIncludePattern: true, // 当前文件名包含 pattern
      numBackups: 3
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

logger.info(1)
setTimeout(() => logger.warn(2), 1100);
setTimeout(() => logger.error(3), 2200);
setTimeout(() => logger.error(4), 3300);
setTimeout(() => logger.error(5), 4400);

/* 输出：

logs/
  app.2023-06-17-12-38-59.log
  app.2023-06-17-12-39-01.log
  app.2023-06-17-12-39-02.log
  app.2023-06-17-12-39-03.log

 */
