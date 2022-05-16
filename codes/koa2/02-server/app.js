const Koa = require('koa');
const responseDurationMiddleware = require('./middleware/koa_response_duration');
const responseHeaderMiddleware = require('./middleware/koa_response_header');
const responseDataMiddleware = require('./middleware/koa_response_data');

const app = new Koa();

app.use(responseDurationMiddleware);
app.use(responseHeaderMiddleware);
app.use(responseDataMiddleware);

app.listen(8888);
