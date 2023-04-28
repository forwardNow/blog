<template>
  <div id="app">
    <ul>
      <li><router-link to="/detail?id=123">/detail?id=123</router-link></li>
      <li><router-link to="/dynamic-detail/456">/dynamic-detail/456</router-link></li>
    </ul>

    <router-view/>
  </div>
</template>
