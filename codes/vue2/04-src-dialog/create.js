import Vue from 'vue';

export default function create(component, props) {
  const vm = new Vue({
    render(createElement) {
      return createElement(component, { props });
    }
  }).$mount(); // 挂载到“内存 DOM”

  // 将 “内存 DOM” 添加到 DOM 树
  document.body.appendChild(vm.$el);

  const componentVm = vm.$children[0];

  componentVm.$$destroy = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return componentVm;
}
