# Vue3 快速上手

## 1. Vue3 简介

2020年9月18日，Vue.js 发布 3.0 版本，代号：One Piece（海贼王）

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
