<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
  >
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <svg-icon source="element" :icon="item[icon]"></svg-icon>
        <span>{{ item[name] }}</span>
      </el-menu-item>

      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <svg-icon source="element" :icon="item[icon]"></svg-icon>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="(child, index1) in item[children]"
          :key="index1"
          :index="child[index]"
        >
          <svg-icon source="element" :icon="item[icon]"></svg-icon>
          <span>{{ child[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  // 导航菜单数据
  data: {
    type: Array,
    required: true
  },
  // 默认选中菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 菜单名称键名
  name: {
    type: String,
    default: 'name'
  },
  // 菜单标识键名
  index: {
    type: String,
    default: 'index'
  },
  // 菜单图标键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 菜单子菜单键名
  children: {
    type: String,
    default: 'children'
  }
})
</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
