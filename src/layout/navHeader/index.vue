<template>
  <div class="header">
    <span @click="toggle">
      <svg-icon
        source="element"
        icon="expand"
        v-if="collapse"
        style="margin-right: 10px; width: 1em; height: 1em"
      />
      <svg-icon source="element" icon="fold" v-else />
    </span>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  collapse: Boolean
})
const emits = defineEmits(['update:collapse'])

const toggle = () => {
  // 需要修改父组件数据
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
svg {
  width: 1em;
  height: 1em;
}
</style>
