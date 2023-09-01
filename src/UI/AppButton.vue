<script setup lang="ts">
import type { StyleValue } from 'vue'

interface IProps {
  sx?: Record<string, StyleValue>
  color: 'primary' | 'secondary'
  bgColor: 'primary' | 'secondary'
}

const props = defineProps<IProps>()
</script>

<template>
  <button
    :style="{
      backgroundColor: props.color === 'primary' ? '#9F0013' : '#5C5C5C',
      ...props.sx
    }"
    class="button"
  >
    <slot>Some text</slot>
    <div
      class="arrow arrow_top"
      :style="{
        color: props.bgColor === 'primary' ? '#fff' : '#232222'
      }"
    ></div>
    <div
      class="arrow arrow_bottom"
      :style="{
        color: props.bgColor === 'primary' ? '#fff' : '#232222'
      }"
    ></div>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/style/funcs.scss';
.button {
  position: relative;
  color: var(--white);
  text-transform: uppercase;
  font-size: to-rem(14);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: to-em(170, 14);
  width: 100%;
  padding: to-em(10, 14) to-em(7, 14);
}

.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid currentColor;
  pointer-events: none;

  &_top {
    left: -7px;
    top: -2px;
    transform: rotate(-45deg);
  }

  &_bottom {
    bottom: -2px;
    right: -7px;
    transform: rotate(135deg);
  }
}
</style>
