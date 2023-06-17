const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        /*
          %[[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c - %m%]
              %[ ... %]
                  颜色块
              %d{yyyy-MM-dd hh:mm:ss.SSS}
                  格式化日期
              [%p]
                  级别
              %c
                  分组
              %m%
                  内容

          示例：
            [2023-06-17 18:10:44.666] [DEBUG] default - 娃哈哈
         */
        pattern: '%[[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c - %m%]',
      }
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'all',
    }
  }
});


const logger = log4js.getLogger();

logger.debug('娃哈哈');
logger.warn('呵呵');
