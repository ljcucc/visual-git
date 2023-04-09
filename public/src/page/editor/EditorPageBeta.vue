<template>
  <div id="editor">
    <!-- <TabsBar>
      <ToolBtns></ToolBtns>
    </TabsBar> -->
    <div class="rbar">
      <ProjectTitle class="title" title="Editor" subtitle="code editor"></ProjectTitle>
    </div>
    <div class="row">
      <TabsList @select="onTabSel"></TabsList>
        <CodeEditorWidget class="code-mirror"></CodeEditorWidget>
      <!-- <FolderCard ref="fc" class="folder-card" v-bind:focus="showFC">
      </FolderCard> -->
    </div>
  </div>
</template>

<style scoped>
.folder-card {
  /* --card-bg: #424242; */
  --card-bg:  #657484;
  margin-top: -16px;
}

.code-mirror{
  background:  rgba(0,0,0, 0.05);
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

.bar{
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 1; 
}

.title{
  flex:1;
}
</style>

<script>
import ProjectTitle from '../../components/ProjectTitle.vue';
import FolderCard from '../files/FolderCard.vue';
import CodeEditorWidget from './CodeEditorWidget.vue';
import TabsBar from './TabsBar.vue';
import TabsList from './TabsList.vue';
import ToolBtns from './ToolBtns.vue';

export default {
  data() {
    return { 
      showFC: true
    };
  },
  async mounted() {
  },
  methods: {
    async onTabSel() {
      console.log("show select");
      this.showFC = false;
      await new Promise(e => setTimeout(e, 200));
      console.log("forward");
      await this.$refs.fc.forward();
      await new Promise(e => setTimeout(e, 100));
      this.showFC = true;
    }
  },
  components: {
    ToolBtns,
    ProjectTitle,
    TabsBar,
    CodeEditorWidget,
    TabsList,
    FolderCard
  }
}
</script>