<template>
  <div id="env">
    <ProjectTitle style="margin-bottom: 16px;" title="Console" subtitle="Virtual environment will run inside browser">
    </ProjectTitle>
    <div class="outline">
      <div class="output">
        <div v-for="log in reLogs">{{ log }}</div>
      </div>
    </div>
    <input type="text" class="cmd">
  </div>
</template>

<style lang="scss" scoped>
#env {
  // max-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  // justify-content: flex-end;
  // align-items: flex-end;
}

.col {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  // height: 100%;
}

.outline {
  border-radius: 14px 14px 8px 8px;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  flex: 1;
}

.output {
  height: 100%;
  box-sizing: border-box;
  flex: 1;
  background: rgba(0, 0, 0, .8);
  padding: 16px;

  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-color: rgba(0, 0, 0, 0.35) rgba(0, 0, 0, 0.35);

  &::-webkit-scrollbar {
    display: none;
  }
}

.output::-webkit-scrollbar-trackk {
  /* background: transparent;  */
  background: rgba(255, 255, 255, 0) !important;
}

// /* Handle */
.output::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0) !important;
}

// /* Handle on hover */
.output:hover::-webkit-scrollbar-thumb,
.output::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15) !important;
}


.row {
  height: calc(80% - 32px);
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 16px;
  // height: 100%;
  box-sizing: border-box;

  justify-content: flex-end;
  align-items: flex-end;
}

.output>* {
  height: 1.5rem;
}

.cmd {
  padding: 16px;
  color: white;
  font-size: 14px;
  border-radius: 8px 8px 14px 14px;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.35);
}

.cmd::before {
  content: '>';
}
</style>

<script>
import ProjectTitle from '../../components/ProjectTitle.vue';
import { files } from './Sandbox';

export default {
  async created() {
    const { print } = this;
    // print("booting...");
    // await this.$sandbox.init();
    // print("mounting files...");
    // await this.$sandbox.container.mount(files);

    print("");
    for (var i = 0; i < 100; i++)
      print("done.");
  },
  async mounted() {
    this.print(
      "Waiting for sandbox boot..."
    )
  },
  methods: {
    print(msg) {
      this.logs.push(msg || " ");
      this.reLogs = this.logs.reverse();
    },
  },
  data() {
    return {
      terminal: null,
      logs: [],
      reLogs: ["hi"]
    };
  },
  components: { ProjectTitle }
}
</script>