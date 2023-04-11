<template>
  <div>
    <!-- <CountBasic></CountBasic> -->
    <!-- <CountGetter></CountGetter> -->
    <CountMap></CountMap>
  </div>
</template>

<script>
import CountBasic from './components/CountBasic.vue';
import CountGetter from './components/CountGetter.vue';
import CountMap from './components/CountMap.vue';

export default {
  name: 'App',

  components: {
    CountBasic,
    CountGetter,
    CountMap,
  },
};
</script>
