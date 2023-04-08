<template>
  <div id="env">
    <ProjectTitle style="margin-bottom: 16px;" title="Sandbox" subtitle="virtual environment that will run inside browser."></ProjectTitle>
    <div class="output">Waiting to boot WebContainer...</div>
    <input type="text" class="cmd">
  </div>
</template>

<style scoped>
#env{
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.output{
  flex:1;
  background: rgba(0,0,0,.8);
  border-radius: 14px 14px 8px 8px;
  overflow-x:hidden;
  overflow-y: auto;
  padding: 16px;
}

.cmd{
  padding: 16px;
  color:white;
  font-size: 14px;
  border-radius: 8px 8px 14px 14px;
  border: none;
  outline:none;
  background: rgba(0,0,0,0.35);
}

.cmd::before{
  content:'>';
}
</style>

<script>
import ProjectTitle from '../../components/ProjectTitle.vue';

export default {
  data() {
    return {};
  },
  components: { ProjectTitle }
}
</script>