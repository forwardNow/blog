module.exports = async (ctx, next) => {
  const contentType = 'application/json;charset=utf-8';

  ctx.set('content-type', contentType);

  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  await next();
};
