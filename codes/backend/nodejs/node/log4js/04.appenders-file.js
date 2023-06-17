const log4js = require('log4js');
const fs = require('fs');

log4js.configure({
  appenders: {
    access: {
      type: 'file',
      filename: './logs/access.log',
      maxLogSize: '1K',  // 单个文件最大尺寸，超过后自动创建新文件
      backups: 2,        // 旧文件的最大数量，不包含当前文件
      keepFileExt: true,
    },
  },
  categories: {
    default: {
      appenders: ['access'],
      level: 'info'
    },
  },
});

const logger = log4js.getLogger();

const content = fs.readFileSync('./node_modules/log4js/README.md', { encoding: 'utf-8' });

logger.info(content);
logger.info(content);
logger.info(content);
logger.info(content);

/* 输出：

logs/
  access.1.log
  access.2.log
  access.log

 */
