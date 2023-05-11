// 类型推论是 HTMLElement
let aLink1 = document.getElementById('aLink');

// 断言为（强转为）HTMLAnchorElement
let aLink2 = document.getElementById('aLink') as HTMLAnchorElement;

// 也可以使用 `<>` 语法，但是与 JSX 冲突
let aLink3 = <HTMLAnchorElement> document.getElementById('aLink');
