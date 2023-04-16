import { reactive, onMounted, onBeforeUnmount } from 'vue';

export default function usePoint() {
  const point = reactive({ x: 0, y: 0 });

  const listener = (event) => {
    const { pageX, pageY } = event;
    point.x = pageX;
    point.y = pageY;
  };

  onMounted(() => {
    window.addEventListener('click', listener);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('click', listener);
  });

  return point;
}