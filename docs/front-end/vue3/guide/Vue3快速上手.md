# Vue3 快速上手

[[toc]]

## 1. Vue3 简介

2020年9月18日，Vue.js 发布 [3.0 版本](https://github.com/vuejs/core/releases/tag/v3.0.0)，代号：One Piece（海贼王）

## 2. Vue3 带来了什么

### 2.1. 性能的提升

- 打包大小减少41%
- 初次渲染快55%, 更新渲染快133%
- 内存减少54%
- ......

### 2.2. 源码的升级

- 使用 Proxy 代替 defineProperty 实现响应式
- 重写虚拟DOM的实现和 Tree-Shaking
- ......

### 2.3. 拥抱TypeScript

Vue3 可以更好的支持 TypeScript

### 2.4. 新的特性

1. Composition API（组合API）
   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject
   - ......

2. 新的内置组件
   - Fragment 
   - Teleport
   - Suspense

3. 其他改变
   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - keyCode 不能再作为 v-on 的修饰符
   - ......

## 3. 创建 Vue3 工程

### 3.1. 使用 vue-cli 创建

官方文档：[https://cli.vuejs.org/zh/guide/creating-a-project.html](https://cli.vuejs.org/zh/guide/creating-a-project.html)

```bash
## 查看 @vue/cli 版本，确保 @vue/cli 版本在 4.5.0 以上
vue --version

## 安装或者升级你的 @vue/cli
npm install -g @vue/cli

## 创建
vue create vue3-proj-by-cli

# Vue CLI v5.0.8
# ? Please pick a preset:
# > Default ([Vue 3] babel, eslint) 
#   Default ([Vue 2] babel, eslint) 
#   Manually select features 


## 切换目录
cd vue3-proj-by-cli

## 启动
npm run serve
```

### 3.2. 使用 vite 创建

vite官网：[https://vitejs.cn](https://vitejs.cn)

什么是 vite？—— 新一代前端构建工具。

优势如下：
- 开发环境中，无需打包操作，可快速的冷启动。
- 轻量快速的热重载（HMR）。
- 真正的按需编译，不再等待整个应用编译完成。

传统构建 与 vite构建对比图：

* ![bundle-based-dev-server](./images/bundle-based-dev-server.svg)

* ![native-esm-based-dev-server](./images/native-esm-based-dev-server.svg)

创建项目：

```bash
# node 16+
npm create vite@latest

# Need to install the following packages:
#   create-vite@latest
# Ok to proceed? (y) y
# √ Project name: ... vue3-proj-by-vite
# √ Select a framework: » Vue
# √ Select a variant: » JavaScript

# Done. Now run:

#   cd vue3-proj-by-vite
#   npm install
#   npm run dev
```

## 4. 分析工程结构

main.js:

```javascript
// 引入的不再是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象 —— app (类似于之前 Vue2 中的 vm，但 app 比 vm 更“轻”)
const app = createApp(App)

// 挂载
app.mount('#app')
```

App.vue:

```html
<template>
	<!-- Vue3 组件中的模板结构可以没有根标签 -->
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
```

## 5. 常用 Composition API

### 5.1. setup

setup 是 Vue3 中一个新的配置项，值为一个函数。

setup 是所有 Composition API（组合API） “表演的舞台”。

组件中所用到的：数据、方法等等，均要配置在 setup 中。

setup 函数有两种返回值：

1. 对象，则对象中的属性、方法, 在模板中均可以直接使用。
2. 渲染函数：则可以自定义渲染内容。（类似 vue2 中的 render 选项）

注意点：

1. 尽量不要与 Vue2 配置混用
   - Vue2 配置（data、methods、computed...）中可以访问到 setup 中的属性、方法。
   - setup 中访问不到 Vue2 配置（data、methods、computed...）。
   - 如果有重名, setup 优先。
2. setup 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）

示例：

```html
<template>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p><button @click="sayHello">sayHello</button></p>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const name = '张三';
    const age = 18;

    function sayHello() {
      alert(`你好，我是${name}，今年${age}岁。`);
    }

    return {
      name,
      age,
      sayHello,
    }
  }
}
</script>
```
