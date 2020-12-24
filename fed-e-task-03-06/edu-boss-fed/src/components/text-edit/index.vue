<template>
	<div ref="text"></div>
</template>
<script lang="ts">
import Vue from 'vue'
import E from 'wangeditor'
import course from '../../api/course'
export default Vue.extend({
  name: 'TextEditor',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.initTextEditor()
    }, 500)
    // this.$nextTick(() => {
    //   this.initTextEditor()
    // })
  },
  methods: {
    initTextEditor() {
      const editor = new E(this.$refs.text as any)
      editor.config.onchange = (value: string) => {
        this.$emit('input', value)
      }
      editor.create()
      editor.txt.html(this.value)
      editor.config.customUploadImg = async function (resultFiles: any, insertImgFn: any) {
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        const fd = new FormData()
        fd.append('file', resultFiles[0])
        const { data } = await course.upLoad(fd)
        // 上传图片，返回结果，将图片插入到编辑器中
        insertImgFn(data.data.name)
      }
    }
  }
})
</script>
