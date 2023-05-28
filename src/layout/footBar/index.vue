<template>
  <el-footer height="200px" style="padding: 0">
    <el-container
      style="text-align: center; align-items: center; justify-content: center"
    >
      <el-col :span="6" class="item-center">
        <el-row>
          <el-col>
            <el-text type="primary">扫描二维码访问</el-text>
          </el-col>
          <el-col><span>&nbsp;</span></el-col>
          <el-col>
            <el-image :src="ErCode" style="height: 120px; width: 120px" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col>
            <el-text> 地址：XXX省XXX市XXX街XXX号 &nbsp;</el-text>
            <el-text>&nbsp; 地址：XXX省XXX市XXX街XXX号 </el-text>
          </el-col>
          <el-col>
            <el-text> 技术支持：XXXXXXXXXXX &nbsp;</el-text>
            <el-text>&nbsp; 联系方式：11111111111 </el-text>
          </el-col>
          <el-col>
            <el-image :src="ErCode" style="height: 120px; width: 120px" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="item-center">
        <el-row>
          <el-col>
            <el-text type="primary">扫描二维码访问</el-text>
          </el-col>
          <el-col><span>&nbsp;</span></el-col>
          <el-col>
            <el-image :src="ErCode" style="height: 120px; width: 120px" />
          </el-col>
        </el-row>
      </el-col>
    </el-container>
    <el-container
      style="
        width: 100%;
        height: 50px;
        justify-content: center;
        background-color: #454545;
      "
    >
      <el-text type="primary"><a href="#">备案号：底部备案信息</a></el-text>
    </el-container>
  </el-footer>
</template>
<script setup>
import ErCode from '@/layout/image/er-code.png'
</script>
<style scoped lang="scss">
.item-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
