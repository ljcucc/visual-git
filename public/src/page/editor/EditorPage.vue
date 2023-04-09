<template>
  <div id="editor">
    <!-- <TabsBar>
      <ToolBtns></ToolBtns>
    </TabsBar> -->
    <ProjectTitle title="Editor" subtitle="code editor"></ProjectTitle>
    <div class="row">
      <TabsList></TabsList>
      <CodeEditorWidget></CodeEditorWidget>
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
  gap: 32px;

  position:relative;
}

/* .row{
  display: flex;
  flex-direction: row;
  gap: 16px;
} */

.row {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  /* gap: 32px; */
  gap: 12px;
  flex: 1;
}


</style>

<script>
import ProjectTitle from '../../components/ProjectTitle.vue';
import CodeEditorWidget from './CodeEditorWidget.vue';
import TabsBar from './TabsBar.vue';
import TabsList from './TabsList.vue';
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
    ToolBtns,
    ProjectTitle,
    TabsBar,
    CodeEditorWidget,
    TabsList
}
}
</script>