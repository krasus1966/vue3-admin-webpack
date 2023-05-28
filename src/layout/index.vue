<template>
  <el-container
    style="height: 100%"
    direction="vertical"
    v-if="layoutType === 'basic'"
  >
    <nav-bar :show-left-info="true" :show-center-info="false" />
    <el-divider style="margin-top: 0; margin-bottom: 0" />
    <el-container>
      <side-bar :show-logo="false" />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-divider style="margin-top: 0; margin-bottom: 24px" />
    <foot-bar />
  </el-container>
  <el-container
    style="height: 100%"
    direction="vertical"
    v-else-if="layoutType === 'basic2'"
  >
    <el-container>
      <side-bar :show-logo="true" />
      <el-container direction="vertical">
        <nav-bar :show-left-info="false" :show-center-info="false" />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <el-divider style="margin-top: 0; margin-bottom: 24px" />
    <foot-bar />
  </el-container>
</template>

<script setup>
import NavBar from '@/layout/navBar'
import SideBar from '@/layout/sideBar'
import FootBar from '@/layout/footBar'
import { ref } from 'vue'

const layoutType = ref('basic')
</script>

<style lang="scss" scoped></style>
