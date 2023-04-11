<template>
  <div>
    <h1>默认插槽</h1>
    <div class="box">
      <TestDefaultSlot />
      <TestDefaultSlot>自定义内容</TestDefaultSlot>
    </div>

    <h1>具名插槽</h1>
    <div class="box">
      <TestNamedSlot>
        <div slot="body">111</div>
        <div slot="footer">222</div>
      </TestNamedSlot>

      <!-- 挨个放入 body 插槽中 -->
      <TestNamedSlot>
        <div slot="body">333</div>
        <div slot="body">444</div>
      </TestNamedSlot>

      <!-- 一个插槽，放入多个元素 -->
      <TestNamedSlot>
        <template slot="body">
          <div>555</div>
          <div>666</div>
        </template>
      </TestNamedSlot>

      <!-- 一个插槽，放入多个元素，最新写法（只能用在 template 上） -->
      <TestNamedSlot>
        <template v-slot:body>
          <div>777</div>
          <div>888</div>
        </template>
      </TestNamedSlot>

      <!-- # 为 v-slot 的简写 -->
      <TestNamedSlot>
        <template #body>
          <div>999</div>
          <div>000</div>
        </template>
      </TestNamedSlot>
    </div>

    <h1>作用域插槽</h1>
    <div class="box">
      <!-- scope 属性已被废弃 -->
      <TestScopeSlot>
        <template scope="scope">
          <div>{{ scope.personName }} - {{ scope.hobby }}</div>
        </template>
      </TestScopeSlot>

      <!-- 解构 -->
      <TestScopeSlot>
        <template slot-scope="{ personName, hobby }">
          <div>{{ personName }} - {{ hobby }}</div>
        </template>
      </TestScopeSlot>

      <!-- 新写法 -->
      <TestScopeSlot>
        <template v-slot:default="{ personName, hobby }">
          <div>{{ personName }} - {{ hobby }}</div>
        </template>
      </TestScopeSlot>
      <TestScopeSlot>
        <template #default="{ personName, hobby }">
          <div>{{ personName }} - {{ hobby }}</div>
        </template>
      </TestScopeSlot>
    </div>

  </div>
</template>

<script>
import TestDefaultSlot from './components/TestDefaultSlot.vue';
import TestNamedSlot from './components/TestNamedSlot.vue';
import TestScopeSlot from './components/TestScopeSlot.vue';

export default {
  name: 'App',

  components: {
    TestDefaultSlot,
    TestNamedSlot,
    TestScopeSlot,
  },
};
</script>
<style>
.box {
  display: flex;
  flex-wrap: wrap;

  margin: 48px auto;
  font-size: 14px;
  color: #333;
  font-family: "Microsoft Yahei";
}

.test-box {
  width: 200px;
  height: 300px;
  margin: 16px;
}

.header,
.body,
.footer {
  height: 100px;
  line-height: 2;
  text-align: center;
}

.header {
  background-color: #ddd;
}
.body {
  background-color: burlywood;
}
.footer {
  background-color: chocolate;
}
</style>
