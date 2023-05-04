const styleLoader = function () {};

/*
  css-loader 处理后的结果是 JS 代码， 这些 JS 代码执行完毕后导出的才是 css 代码

  执行后续 loader 处理完的 JS 代码：

    import result from '!!css-loader!less-loader!./style.less'
 */
styleLoader.pitch = function(remainingRequest) {
  /*
    W:\dev\blog\codes\frontend\webpack\guide\custom-loaders\node_modules\css-loader\dist\cjs.js
    !
    W:\dev\blog\codes\frontend\webpack\guide\custom-loaders\node_modules\less-loader\dist\cjs.js
    !
    W:\dev\blog\codes\frontend\webpack\guide\custom-loaders\src\css\style.less
   */
  console.log('remainingRequest:', remainingRequest)

  const relativeRequest = remainingRequest
    .split("!")
    .map((part) => this.utils.contextify(this.context, part))
    .join("!");

  /*
   ../../node_modules/css-loader/dist/cjs.js
   !
   ../../node_modules/less-loader/dist/cjs.js
   !
   ./style.less
   */
  console.log('relativeRequest:', relativeRequest);

  const script = `
    import css from "!!${relativeRequest}"
    const styleEl = document.createElement('style')
    styleEl.innerHTML = css
    document.head.appendChild(styleEl)
  `;

  return script;
};


module.exports = styleLoader;
