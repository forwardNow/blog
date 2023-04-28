const fs = require('fs');
const path = require('path');

module.exports = async (ctx, next) => {
  let response = {};
  try {
    const json = getJsonFileByUrl(ctx.request.url);
    response = { status: 200, data: json };
  } catch (e) {
    response = { status: 500, message: '读取文件失败' };
  }

  ctx.response.body = JSON.stringify(response);
  await next();
};

function getJsonFileByUrl(url) {
  const filePath = getFilePathByUrl(url);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const json = JSON.parse(fileContent);
  return json;
}

// /api/seller  -> ../data/seller.json
function getFilePathByUrl(url) {
  const lastName = url.replace('/api/', ''); // /api/seller -> seller
  return path.join(__dirname, '../data', `${lastName}.json`);
}
