<template>
  <transition name="slide-fade">
    <div class="toast-panel" v-if="visible">
      <div>
        <div class="toast-panel-title">{{title}}</div>
        <div class="toast-panel-content">{{content}}</div>
      </div>
      <div @click="close" class="toast-panel-close">✘</div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Toast',
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
  },
  setup() {
    const visible = ref(false)
    setTimeout(() => {
      visible.value = true
    }, 100)
    const close = () => {
      visible.value = false
    }
    return {
      visible,
      close,
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
