const Koa = require('koa');
const Router = require('@koa/router');
const { koaBody } = require('koa-body');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
});

/*
请求：
  GET http://localhost:3000/getUser?id=1

响应：
  Content-Type: application/json; charset=utf-8

  {
    "id": 1,
    "name": "张三"
  }
 */
router.get('/getUser', (ctx, next) => {
    const { query } = ctx.request;

    // { id: '1' }
    console.log('ctx.request.query: ', query);

    ctx.response.body = { id: 1, name: '张三' };
})

/*
请求：
  GET http://localhost:3000/user/2

响应：
  Content-Type: application/json; charset=utf-8

  {
      "id": 2,
      "name": "李四"
  }
 */
router.get('/user/:id', (ctx, next) => {
    const { params } = ctx;

    // { id: '2' }
    console.log('ctx.params: ', params);

    ctx.response.body = { id: 2, name: '李四' };
})

/*
请求：
  POST http://localhost:3000/updateUser
  {
    "id": 3,
    "name": "王五"
  }

响应：
  Content-Type: application/json; charset=utf-8
  {
    "id": 3,
    "name": "王五"
  }

注意：
  需要使用 koa-body 中间件，否则 ctx.request.body 为 undefined
 */
router.post('/updateUser', (ctx, next) => {
    const { body } = ctx.request

    // { id: 3, name: '王五' }
    console.log('ctx.request.body: ', body)

    ctx.response.body = body;
});

app
    .use(koaBody())
    // .use(jsonResultMiddleware)
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server is started: http://localhost:3000')
});
