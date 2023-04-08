<template>
  <div class="title" v-on:wheel="onWheel">
    <!-- $ (no workspace is open) -->
    {{title}}
    <div class="subtitle">
    {{subtitle}}
      <!-- Please open your workspace at home page -->
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  opacity: 0.5;
}
</style>

<script>
export default {
  props:{
    title: String,
    subtitle: String
  },
  data(){
    return {};
  }
}
</script>