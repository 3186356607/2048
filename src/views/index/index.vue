<script setup lang="ts">
import { ref } from "vue";
const isHovered = ref(false);
const onMouseOver = () => {
  isHovered.value = true;
  setTimeout(() => {
    isHovered.value = false;
  }, 3000);
};
</script>
<template>
  <div class="container">
    <div
      class="item item1"
      :class="{ 'item1-hovered': isHovered }"
      @mouseover="onMouseOver"
    ></div>
    <div class="item rotateOutUpRight"></div>
  </div>
</template>
<style lang="less" scoped>
@bgColor: #1f8dd6;
.item {
  width: 100px;
  height: 50px;
  background-color: @bgColor;
  transition: transform 0.3s;
  transform-origin: left top;
  border-radius: 8px;
  margin-bottom: 20px;
}

.item1-hovered {
  animation: rotate 2s;
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(70deg);
  }
  35% {
    transform: rotate(58deg);
  }
  45% {
    transform: rotate(70deg);
  }
  55% {
    transform: rotate(58deg);
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  // 向下移动并消失
  100% {
    transform: translateY(450px) rotate(58deg);
    opacity: 0;
  }
}
</style>
