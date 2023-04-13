<template>
  <div>
    <!-- to 的字符串写法 -->
    <router-link :to="`/query-detail?id=${id}&name=${name}`">
      详情页
    </router-link>

    <!-- to 的对象写法 -->
    <router-link
      :to="{
        path: '/query-detail',
        query: { id: 2, name: '李四' }
      }"
    >
      详情页
    </router-link>

    <hr>

    <!-- to 的字符串写法 -->
    <router-link :to="`/params-detail/${id}/${name}`">
      详情页
    </router-link>

    <!-- to 的对象写法 -->
    <router-link
      :to="{
        name: 'ParamsDetail',
        params: { id: 3, name: '王五' }
      }"
    >
      详情页
    </router-link>

    <hr>
    <router-link :to="`/props-detail-obj`">
      详情页
    </router-link>
    <router-link :to="`/props-detail-true/7/钱七`">
      详情页
    </router-link>
    <router-link :to="`/props-detail-fun?id=8&name=孙八`">
      详情页
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
      name: '张三',
    };
  },
};
</script>
<style>
  .active {
    color: red;
  }
</style>
