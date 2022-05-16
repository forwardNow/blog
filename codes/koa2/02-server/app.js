const Koa = require('koa');
const app = new Koa();
const responseDurationMiddleware = require('./middleware/koa_response_duration');

app.use(responseDurationMiddleware);

app.listen(8888);
