<template>
    <div>
        <div>子组件刷新</div>
        <parent></parent>
    </div>
</template>
<script>
  import parent from '@/components/demo1/parent.vue'
  export default {
    components: {
      parent
    }  
  }
</script>