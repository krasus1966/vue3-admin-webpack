<template>
  <ks-choose-icon title="选择图标" v-model:visible="visible">
    选择图标
  </ks-choose-icon>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="scss" scoped></style>
