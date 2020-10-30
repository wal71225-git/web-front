<template>
  <div class="container">
    <button @click="isActive = !isActive">展开/折叠</button>
    <collapse>
      <div class="container" v-show="isActive">
        <h2>欢迎大家品尝Pizza!</h2>
        <h5>这里有你非常喜欢的Pizza!</h5>
        <h2>欢迎大家品尝Pizza!</h2>
        <h5>这里有你非常喜欢的Pizza!</h5>
        <h2>欢迎大家品尝Pizza!</h2>
        <h5>这里有你非常喜欢的Pizza!</h5>
        <h2>欢迎大家品尝Pizza!</h2>
        <h5>这里有你非常喜欢的Pizza!</h5>
      </div>
    </collapse>
  </div>
</template>
<script>
import collapse from "./collapse.js";
export default {
 data() {
  return {
   isActive: false,
   collapse: []
  };
 },
 components: {
  collapse
 }
};
</script>