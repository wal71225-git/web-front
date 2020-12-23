<template>
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button>{{isEdit ? '编辑菜单' : '添加菜单'}}</el-button>
      </div>
      <el-form ref="form" :model="menu" label-width="80px">
        <el-form-item label="菜单名称">
          <el-input v-model="menu.name"></el-input>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="menu.href"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单">
          <el-select v-model="menu.parentId" placeholder="请选择上级菜单">
            <el-option label="无上级菜单" :value="-1"></el-option>
            <el-option v-for="menu in parentMenuList" :key="menu.id" :label="menu.name" :value="menu.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="menu.description"></el-input>
        </el-form-item>
        <el-form-item label="前端图标">
          <el-input v-model="menu.icon"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-radio-group v-model="menu.shown">
            <el-radio :label="true">是</el-radio>
            <el-radio :label="false">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="menu.orderNum"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button v-if="!isEdit">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MenuCreate',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menu: {
        name: '',
        href: '',
        parentId: -1,
        icon: '',
        orderNum: 0,
        shown: false,
        description: ''
      },
      parentMenuList: [] // 父级菜单
    }
  },
  created() {
    this.getParentMenuList()
  },
  methods: {
    async getParentMenuList() {
      const { data } = await this.$api.menu.getParentMenuList(this.menu.parentId)
      this.parentMenuList = data.data.parentMenuList
    },
    async onSubmit() {
      const { data } = await this.$api.menu.menuAddOrUpdate(this.menu)
      if (data.code === '000000') {
        this.$message.success('提交成功')
        this.$router.back()
      }
    }
  }
})
</script>
