<template>
  <div id="env">
    <ProjectTitle style="margin-bottom: 16px;" title="Console" subtitle="Virtual environment will run inside browser">
    </ProjectTitle>
    <div class="output">
      <div v-for="log in logs">{{ log }}</div>
    </div>
    <input type="text" class="cmd">
  </div>
</template>

<style lang="scss"></style>

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


.output {
  height: 100%;
  box-sizing: border-box;
  flex: 1;
  background: rgba(0, 0, 0, .8);
  border-radius: 14px 14px 8px 8px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar-track {
    /* background: transparent;  */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0);
  }

  /* Handle on hover */
  &:hover::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.15);
  }

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
import { WebContainer } from '@webcontainer/api';
import ProjectTitle from '../../components/ProjectTitle.vue';
import { files } from './Sandbox';

export default {
  async created() {
    const { print } = this;
    print("booting...");
    await this.$sandbox.init();
    print("mounting files...");
    await this.$sandbox.container.mount(files);

    print("");
    for (var i = 0; i < 100; i++)
      print("done.");
  },
  async mounted() {
  },
  methods: {
    print(msg) {
      this.logs.push(msg || " ");
    },
  },
  data() {
    return {
      terminal: null,
      logs: [
        "Waiting for sandbox boot..."
      ]
    };
  },
  components: { ProjectTitle }
}

async function installDependencies(terminal, sandbox) {
  // Install dependencies
  const installProcess = await sandbox.spawn('jsh', ['']);
  // const installProcess = await sandbox.spawn('npm', ['install']);
  installProcess.output.pipeTo(new WritableStream({
    write(data) {
      terminal.write(data);
    }
  }))
  // Wait for install command to exit
  return installProcess.exit;
}

async function startShell(terminal, sandbox) {
  const shellProcess = await sandbox.spawn('jsh');
  shellProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        terminal.write(data);
      },
    })
  );

  const input = shellProcess.input.getWriter();
  terminal.onData((data) => {
    input.write(data);
  });

  return shellProcess;
};
</script>