<template>
  <el-header style="border-bottom: 1px solid #dcdfe6">
    <el-container>
      <el-col :span="9" class="toolbar item-center">
        <el-container v-if="showLeftInfo">
          <el-image :src="Logo" style="width: 50px; height: 50px" />
          <el-text>系统名称系统名称</el-text>
        </el-container>
      </el-col>
      <el-col :span="11" class="toolbar col-center">
        <el-container v-if="showCenterInfo"> 系统名称 </el-container>
      </el-col>
      <el-col :span="4" class="toolbar col-right">
        <div class="item-center">
          <el-dropdown>
            <section class="item-center">
              <el-avatar :src="Logo" :size="50" />
              <span>Tom</span>
            </section>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-divider style="margin-top: 10px; margin-bottom: 10px" />
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-container>
  </el-header>
</template>

<script setup>
import Logo from '@/layout/image/logo.png'
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  showLeftInfo: Boolean,
  showCenterInfo: Boolean
})

const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 100%;
  display: inline-flex;
  align-items: center;
}
.col-left {
  padding-left: 20px;
  float: left;
}
.col-center {
}

.col-right {
  padding-right: 20px;
  flex-direction: row-reverse;
}

.item-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>
