module.exports = async (ctx, next) => {
  const contentType = 'application/json;charset=utf-8';

  ctx.set('content-type', contentType);

  await next();
};
