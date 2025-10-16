<template>
  <div id="editor">
    <!-- <TabsBar>
      <ToolBtns></ToolBtns>
    </TabsBar> -->
    <div class="bar">
      <ProjectTitle class="title" title="Editor" :subtitle="curTabIndex"></ProjectTitle>
      <ToolBtns v-model:enable="toolbarOn"></ToolBtns>
    </div>
    <div class="row">
      <div class="col">
        <TabsList v-model:sel="curTabIndex" style="flex: 1;"></TabsList>
        <EditingInfoWidget></EditingInfoWidget>
      </div>
      <CodeEditorWidget class="code-mirror"></CodeEditorWidget>
      <ToolsSideBar :enable="toolbarOn"></ToolsSideBar>
    </div>
  </div>
</template>

<style scoped>
.folder-card {
  /* --card-bg: #424242; */
  /* --card-bg: #657484; */
  margin-top: -16px;
  margin-bottom: -32px;
}

.code-mirror {
  /* background:  rgba(0,0,0, 0.05); */
  background: rgba(255, 255, 255, 1);
}

#editor {
  height: 100%;
  box-sizing: border-box;
  padding: 32px;
  /* padding-top: 64px; */
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 32px;

  position: relative;
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

.col{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.bar {
  display: flex;
  flex-direction: row;
  gap: 12px;
}

.title {
  flex: 1;
}
</style>

<script>
import ProjectTitle from '../../components/ProjectTitle.vue';
import FolderCard from '../files/FolderCard.vue';
import CodeEditorWidget from './CodeEditor.Widget.vue';
import EditingInfoWidget from './EditingInfo.Widget.vue';
import TabsBar from './TabsBar.vue';
import TabsList from './TabsList.vue';
import ToolBtns from './ToolBtns.vue';
import ToolsSideBar from './ToolsSideBar.vue';

export default {
  data() {
    return {
      showFC: true,
      toolbarOn: false,
      curTabIndex: 0,
    };
  },
  async mounted() {
    // this.showFC = false;
  },
  methods: {
    async onTabSel(type) {
    }
  },
  components: {
    ToolBtns,
    ProjectTitle,
    TabsBar,
    CodeEditorWidget,
    TabsList,
    FolderCard,
    ToolsSideBar,
    EditingInfoWidget
},
  watch: {
    curTabIndex(newVal, oldVal) {
      console.log("change")
      this.onTabSel(newVal > oldVal ? "forward" : "back")
    }
  }
}
</script>