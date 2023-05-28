<template>
  <div
    v-if="source === 'network'"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <el-icon v-else-if="source === 'element'" :class="className">
    <component :is="iconName" />
  </el-icon>
  <svg
    v-else-if="source === 'self'"
    class="svg-icon"
    :class="className"
    aria-hidden="true"
  >
    <use :href="iconName" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { toLine } from '@/util/validate'

const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: '',
    required: true,
    validator: (value) => {
      return ['network' | 'element' | 'self'].includes(value)
    }
  }
})
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => {
  if (props.source === 'network') {
    return {
      mask: `url(${props.icon}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
    }
  }
  return {}
})
/**
 * 内部图标
 */
const iconName = computed(() => {
  if (props.source === 'element') {
    return `el-icon-${toLine(props.icon)}`
  } else {
    return `#icon-${props.icon}`
  }
})
computed(() => console.log('icon', props.icon))
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
