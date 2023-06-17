const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = log4js.levels.DEBUG; // 日志级别，输出 debug 级别及以上 的日志

logger.debug('hello, log4js');
logger.info('hello, log4js');
logger.warn('hello, log4js');
logger.error('hello, log4js');
