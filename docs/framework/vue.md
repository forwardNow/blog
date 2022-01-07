# vue

## 1. 组件化

组件化是 vue 的核心思想，主要目的是为了**代码重用**。

## 2. 组件通信

### 2.1. 父组件 --> 子组件

属性（props）：

```javascript
// child
{
  props: {
    msg: String
  }
}

// parent
<Child msg="hello" />
```

引用（$refs）：

```jsx
// parent
<Child ref="childRef" />

const childVm = this.$refs.childRef;
```

子元素（$children）：

```javascript
// parent
const childVm = this.$children[0];

// 只针对唯一子组件有效，$children 不保证顺序
```

### 2.2. 父组件 --> 子组件

自定义事件：

```javascript
// child
this.$emit('add', { msg: 'hello' });

// parent
<Child @add="handleAdd" />
```

### 2.3. 兄弟组件

>通过共同的祖先组件作为中间人， `$parent` 或 `$root`

```javascript
// brother1
this.$parent.$on('add', handleAdd);

// brother2
this.$parent.$emit('add', { msg: 'hello' });
```

### 2.4. 祖先 --> 后代

>多用于组件库

provide / inject ： 祖先给后代传值（属性传值）

```javascript
// 祖先
provide() {
  return {
    msg: 'hello'
  }
}

// 后代
inject: [
  'msg'
]
```

### 2.5. 任意两个组件

>事件总线 或 vuex

事件总线： 

```javascript
// bus.js
export default new Vue();

// 1.vue
import bus from './bus';

bus.$on('add', ({ msg }) => {
  console.log(msg);
})


// 2.vue
import bus from './bus';

bus.$emit('add', { msg: 'hello' });
```

vuex：

## 3. 插槽

30:00