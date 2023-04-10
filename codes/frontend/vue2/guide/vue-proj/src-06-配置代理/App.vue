<template>
  <div id="root">
    <p>
      <button @click="getStudents">获取学生信息</button>
    </p>
    <p>
      <button @click="getCars">获取汽车信息</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  methods: {
    getStudents() {
      axios.get('http://localhost:8080/api1/students')
        .then((res) => {
          console.log(res.data);
        });
    },

    getCars() {
      axios.get('http://localhost:8080/api2/cars')
        .then((res) => {
          console.log(res.data);
        });
    },
  },
};
</script>
