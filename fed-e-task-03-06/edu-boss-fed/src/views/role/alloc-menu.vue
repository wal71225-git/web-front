<template>
  <div style="text-align: center">
    <el-card>
      <el-tree
        ref="menuTree"
        :data="menuList"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="checkedList"
        :props="defaultProps">
      </el-tree>
      <el-button type="primary" @click.native="saveRoleMenus">保存</el-button>
      <el-button @click="clearChecked">清空</el-button>
    </el-card>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AllocMenu',
  props: {
    roleId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      menuList: [],
      defaultProps: {
        children: 'subMenuList',
        label: 'name'
      },
      checkedList: []
    }
  },
  created() {
    this.getMenuNodeList()
    this.getRoleMenus()
  },
  methods: {
    async getMenuNodeList() { // 获取全部菜单列表
      const { data } = await this.$api.menu.getMenuNodeList()
      this.menuList = data.data
    },
    async getRoleMenus() { // 获取角色菜单列表
      const { data } = await this.$api.role.getRoleMenus(this.roleId)
      this.getCheckedKeys(data.data)
    },
    getCheckedKeys(menus) { // 获取选中的数组
      menus.forEach(menu => {
        if (menu.selected) {
          this.checkedList = [...this.checkedList, menu.id]
        }
        if (menu.subMenuList) {
          this.getCheckedKeys(menu.subMenuList)
        }
      })
    },
    async saveRoleMenus() { // 添加角色菜单
      const menuIdList = this.$refs.menuTree.getCheckedKeys()
      await this.$api.role.saveRoleMenus({
        roleId: this.roleId,
        menuIdList
      })
      this.$router.back()
    },
    clearChecked() { // 清空选择
      this.$refs.menuTree.setCheckedKeys([])
    }
  }
})
</script>
