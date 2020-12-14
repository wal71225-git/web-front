<template>
    <el-form ref="roleForm" :model="role" style="padding-right: 80px" size="120px">
      <el-form-item label="角色编码" prop="code" :label-width="formLabelWidth">
        <el-input v-model="role.code"  placeholder="角色编码"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="name" :label-width="formLabelWidth">
        <el-input v-model="role.name" placeholder="角色名称"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="description" :label-width="formLabelWidth">
        <el-input v-model="role.description" placeholder="角色名称"></el-input>
      </el-form-item>
      <el-form-item class="dialog-footer" style="text-align: right">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
   </el-form>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'RoleAddOrEdit',
  props: {
    roleId: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      role: {
        code: '',
        name: '',
        description: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    this.loadRole()
  },
  methods: {
    async onSubmit() {
      await this.$api.role.saveOrUpdate(this.role)
      this.$emit('success')
    },
    async loadRole() {
      const { data } = await this.$api.role.getRoleById(this.roleId)
      console.log(data)
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
})
</script>
