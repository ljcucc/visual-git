<template>
  <div id="env">
    <ProjectTitle style="margin-bottom: 16px;" title="Sandbox" subtitle="virtual environment that will run inside browser."></ProjectTitle>
    <div class="output">
      <div v-for="log in logs">{{ log }}</div>
    </div>
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

  display: flex;
  flex-direction: column;
}

.output>*{
  height: 1.5rem;
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
import { WebContainer } from '@webcontainer/api';
import ProjectTitle from '../../components/ProjectTitle.vue';
import { files } from './Sandbox';

export default {
  async created(){
    const {print} = this;

    print("booting...");
    this.sandbox = await WebContainer.boot();
    print("mounting files...");
    await this.sandbox.mount(files);

    print("");
    print("done.");
  },
  methods:{
    print(msg){
      this.logs.push(msg || " ");
    }
  },
  data() {
    return {
      sandbox: null,
      logs: [
        "Waiting for sandbox boot..."
      ]
    };
  },
  components: { ProjectTitle }
}
</script>