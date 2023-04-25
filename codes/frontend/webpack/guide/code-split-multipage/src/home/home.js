import {sum} from '../common/common';

console.log('hello, Home!', sum(1, 2, 3, 4));

import('../common/math').then(({ add }) => {
  console.log(add(1, 2))
})
