<template>
  <div id="welcome">
    <div>Geoko v0.0.1</div>
    <div style="flex: 1;"></div>
    <div>
      <p style="margin-bottom: 2rem;">Projects</p>

      ( You have no project [yet]. )
    </div>
  </div>
</template>

<style scoped>
#welcome{
  padding: 32px;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}
</style>

<script>
export default {
  data(){
    return {
    };
  }
};
</script>