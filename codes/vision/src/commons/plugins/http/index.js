import axios from 'axios';

export const http = axios.create({
  timeout: 6000,
});

export default function install(Vue) {
  Vue.prototype.$http = http;
}
