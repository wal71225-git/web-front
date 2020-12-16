<template>
  <div>
    <el-tree
      :data="menuList"
      show-checkbox
      node-key="id"
      default-expand-all
      :default-checked-keys="checkedList"
      :props="defaultProps">
    </el-tree>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AllocMenu',
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
  },
  methods: {
    async getMenuNodeList() {
      const { data } = await this.$api.menu.getMenuNodeList()
      console.log('层级菜单=====', data)
      this.menuList = data.data
      this.getCheckedKeys(this.menuList)
    },
    getCheckedKeys(menus) { // 获取选中的数组
      meuns.forEach(menu => {
        if(menu.selected) {
          this.checkedList.push(item.id)
        }
        if(menu.subMenuList) {
          this.getCheckedKeys(menu.subMenuList)
        }
      })
    }
  }
})
</script>
