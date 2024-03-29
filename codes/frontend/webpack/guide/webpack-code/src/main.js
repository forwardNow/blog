import sum from "./js/sum";
import subtract from "./js/subtract";

import './style/1.css';
import './style/2.less';
import './style/3.sass';
import './style/4.scss';
import './style/5.styl';

import './fonts/iconfont.css';

console.log( sum(1, 2, 3) );
console.log( subtract(10, 9) );
console.log(1 === '2');
console.log('xxxx')

// if (module.hot) {
//   module.hot.accept('./js/sum');
// }

import(
  /* webpackChunkName: "division" */
  './js/division'
).then(({default: divide}) => {
  console.log(divide(4, 2));
})

const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});

class Student {
}

new Student();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
