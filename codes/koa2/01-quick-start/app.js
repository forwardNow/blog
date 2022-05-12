const Koa = require('koa');

const app = new Koa();

// 调用 next() 则执行下一个中间件
app.use((ctx, next) => {
  console.log(ctx.request.url);
  ctx.response.body = 'hello world';
});

app.listen(3000);
