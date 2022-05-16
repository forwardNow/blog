module.exports = async (ctx, next) => {
  const start = Date.now();

  await next();

  const end = Date.now();

  const duration = end - start;
  ctx.set('x-response-time', `${duration}ms`);
};
