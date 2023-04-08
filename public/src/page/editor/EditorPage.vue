<template>
  <div id="editor">
    <TabsBar>
      <ToolBtns></ToolBtns>
    </TabsBar>
    <div class="row">
      <div class="codemirror-container">
        <div class="codemirror">
          <CodeMirrorEditor></CodeMirrorEditor>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#editor {
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  /* padding-top: 64px; */
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position:relative;
}

.row{
  display: flex;
  flex-direction: row;
  gap: 16px;
}


.row {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex: 1;
}

.codemirror-container {
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 8px 8px 14px 14px;
  /* border-radius: 14px; */
  flex: 1;
}

.codemirror {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
}

wc-codemirror {
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
}
</style>

<script>
import CodeMirrorEditor from '../../components/CodeMirrorEditor.vue';
import ProjectTitle from '../../components/ProjectTitle.vue';
import TabsBar from './TabsBar.vue';
import ToolBtns from './ToolBtns.vue';

export default {
  data() {
    return { True: true };
  },
  async mounted() {
    await new Promise(e => setTimeout(e, 5000));
    this.$refs.cm.editor.options.theme = "monokai";
    this.$refs.cm.editor.options.mode = "javascript";
    console.log(this.$refs.cm.editor.options.theme)
  },
  components: {
    CodeMirrorEditor,
    ToolBtns,
    ProjectTitle,
    TabsBar
}
}
</script>