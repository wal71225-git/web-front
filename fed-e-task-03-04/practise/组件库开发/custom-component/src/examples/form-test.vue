<template>
  <div>
    <lg-form>
      <Lg-form-item label="用户名"></Lg-form-item>
    </lg-form>
  </div>
</template>
<script>
  import LgForm from '../components/form/form'
  import LgFormItem from '../components/form/formItem'
  export default {
    name: 'FormTest',
    components: {
      LgForm,
      LgFormItem
    }
  }
</script>