<template>
  <el-aside width="auto" style="height: auto; border-right: 1px solid #dcdfe6">
    <el-container direction="vertical" style="width: auto; height: auto">
      <div class="logo" v-show="showLogo" v-if="!collapse">
        <el-avatar :src="Logo" :size="30" />
        <el-text
          size="default"
          style="padding-left: 10px"
          truncated
          v-if="!collapse"
          >系统名称系统名称</el-text
        >
      </div>
      <div class="logo" v-show="showLogo" v-else>
        <el-avatar :src="Logo" :size="30" />
      </div>
      <section style="text-align: center">
        <ks-svg-icon
          @click="toggle"
          source="element"
          icon="expand"
          v-if="collapse"
          style="margin-right: 10px; width: 1em; height: 1em"
        />
        <ks-svg-icon @click="toggle" source="element" icon="fold" v-else />
      </section>
      <el-scrollbar>
        <ks-menu
          :collapse="collapse"
          :data="data"
          :router="true"
          :defaultActive="$route.path"
        />
      </el-scrollbar>
    </el-container>
  </el-aside>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import Logo from '@/layout/image/logo.png'

defineProps({
  showLogo: {
    type: Boolean,
    default: true
  }
})

const collapse = ref(false)

const toggle = () => {
  // 需要修改父组件数据
  collapse.value = !collapse.value
}

const data = [
  {
    name: '首页',
    index: '/',
    icon: 'HomeFilled'
  },
  {
    name: '图标选择器',
    index: '/chooseIcon',
    icon: 'Check'
  },
  {
    name: '省市区选择',
    index: '/chooseArea',
    icon: 'Location'
  },
  {
    name: '趋势标记',
    index: '/trend',
    icon: 'Sort'
  },
  {
    name: '时间选择',
    index: '/chooseTime',
    icon: 'Timer'
  },
  {
    name: '通知菜单',
    index: '/notification',
    icon: 'Bell'
  },
  {
    name: '导航菜单',
    index: '/menu',
    icon: 'Menu'
  },
  {
    name: '城市选择',
    index: '/chooseCity',
    icon: 'Guide'
  },
  {
    name: '进度条',
    index: '/progress',
    icon: 'DArrowRight'
  },
  {
    name: '日历',
    index: '/calendar',
    icon: 'ScaleToOriginal'
  },
  {
    name: '表单',
    index: '/form',
    icon: 'Setting'
  },
  {
    name: '表格',
    index: '/table',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  },
  {
    name: '文件预览',
    index: '/preview',
    icon: 'ShoppingBag'
  }
]
</script>

<style scoped lang="scss">
.el-aside {
  display: flex;
  height: inherit;
  position: relative;
}

.logo {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
}
</style>
