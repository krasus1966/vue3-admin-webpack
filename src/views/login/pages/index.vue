<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      ref="loginFormRef"
      :rules="loginFormRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-col :span="2">
          <span class="svg-container">
            <svg-icon
              source="network"
              icon="https://res.lgdsunday.club/user.svg"
            ></svg-icon>
          </span>
        </el-col>
        <el-col :span="22">
          <el-input
            placeholder="请输入用户名"
            name="username"
            type="text"
            v-model="loginForm.username"
          />
        </el-col>
      </el-form-item>

      <el-form-item prop="password">
        <el-col :span="2">
          <span class="svg-container">
            <svg-icon source="element" icon="lock" />
          </span>
        </el-col>
        <el-col :span="20">
          <el-input
            placeholder="请输入密码"
            name="password"
            type="password"
            v-model="loginForm.password"
          />
        </el-col>
        <el-col :span="2">
          <span class="show-pwd" @click="onChangePwdType">
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
              source="self"
            />
          </span>
        </el-col>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handlerLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref } from 'vue'
import { validatePassword } from '@/views/login/rules'
import { useStore } from 'vuex'

const loginForm = ref({
  username: '',
  password: ''
})

const loginFormRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名必须填写'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '密码必须填写',
      validator: validatePassword()
    }
  ]
})

// 密码框明文显示
const passwordType = ref('password')

const onChangePwdType = () => {
  // 当passwordType的值为 password 的时候，改为text
  // 使用ref 声明的数据，在 script中使用时，需要加value来获取具体的值 template中不需要
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 登录按钮操作
const loading = ref(false)
const store = useStore()
const loginFormRef = ref(null)
const handlerLogin = () => {
  // 1. 表单校验
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    // 2. 触发登录动作
    loading.value = true
    store
      .dispatch('user/loginTest', loginForm.value)
      .then(() => {
        // TODO 进行登录后处理
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .el-form-item__content {
        line-height: 0;
      }
    }

    :deep .el-input {
      display: inline-block;
      height: 45px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);

      .el-input__wrapper {
        height: 100%;
        width: 100%;
        box-shadow: 0 0 0 0;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .svg-container {
    //padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: inherit;
    right: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .lang-select {
    position: absolute;
    top: 4px;
    right: 0;
    background-color: #fff;
    font-size: 22px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
