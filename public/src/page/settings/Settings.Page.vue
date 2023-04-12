<template>
  <div id="env">
    <ProjectTitle style="margin-bottom: 16px;" title="Settings" subtitle="Hello World">
    </ProjectTitle>
    <div class="outline">
      <div class="output">
      </div>
    </div>
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
  // border-radius: 14px 14px 8px 8px;
  border-radius: 14px;
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

export default {
  async created() {
  },
  async mounted() {
  },
  methods: {
  },
  data() {
    return {
    };
  },
  components: { ProjectTitle }
}
</script>