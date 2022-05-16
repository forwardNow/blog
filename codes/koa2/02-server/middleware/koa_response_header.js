module.exports = (ctx, next) => {
  const contentType = 'application/json;charset=utf-8';

  ctx.set('content-type', contentType);

  ctx.response.body = JSON.stringify({ 'success': true });
};
