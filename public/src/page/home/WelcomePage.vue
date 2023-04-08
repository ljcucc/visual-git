<template>
  <div id="welcome">
    <div>Touch Sandbox IDE<br><span style="opacity: 0.5;">Feel the touch and pleasure of creating and developing.</span></div>
    <div style="flex: 1;"></div>
    <div>
      <p style="margin-bottom: 2rem;">Projects</p>

      <span style="opacity: 0.5;">
      ( You have no project [yet]. )
      </span>
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