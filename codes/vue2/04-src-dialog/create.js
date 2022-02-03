import Vue from 'vue';

/**
 * 从头创建指定组件实例，并挂载到 document.body
 * 
 * @param component
 * @param props
 * @return {Vue|VNode}
 */
export default function create(component, props) {
  const vm = new Vue({
    render(createElement) {
      return createElement(component, { props });
    }
  }).$mount(); // 挂载到“内存 DOM”（生成 $el）

  // 将 “内存 DOM” 添加到 DOM 树
  document.body.appendChild(vm.$el);

  const componentVm = vm.$children[0];

  componentVm.$$destroy = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };

  return componentVm;
}
