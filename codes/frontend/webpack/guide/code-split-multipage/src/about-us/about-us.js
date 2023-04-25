import { sum } from "../common/common";

console.log('hello, AboutUs!', sum(1, 2, 3));

import('../common/math').then(({ add }) => {
  console.log(add(1, 2))
})
