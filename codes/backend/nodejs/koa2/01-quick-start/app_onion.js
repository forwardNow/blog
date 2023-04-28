const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('step 1');
  ctx.response.body = 'hello world';

  const result = await next();

  console.log(`step 4`, result); // 中间件 2 返回的值

  return '中间件 1 返回的值';
});

app.use(async (ctx, next) => {
  console.log('step 2');

  const result = await next();

  console.log('step 3', result); // undefined

  return '中间件 2 返回的值';
});

app.listen(3000);
