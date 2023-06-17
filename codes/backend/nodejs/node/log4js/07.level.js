const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: log4js.levels.INFO,
    }
  }
});


const logger = log4js.getLogger();

logger.debug('debug'); // 不会显示
logger.info('info');
