<template>
  <div class="app-layout" :style="{'--bg':color}">
    <Sidebar v-model:index="index" :max-index="3"></Sidebar>
    <div id="pages">
      <div class="page-switcher" v-bind:style="{ marginTop: index * 100 * -1 + 'vh' }"></div>
      <WelcomePage></WelcomePage>
      <FinderPage></FinderPage>
      <EditorPageBeta></EditorPageBeta>
      <EnvPage></EnvPage>
    </div>
  </div>
</template>

<style scoped>
.page-switcher {
  transition-timing-function: cubic-bezier(0, 1, 0, 1) !important;
  transition: margin 0.5s;
}

#pages {
  flex: 1;
  overflow-y: hidden;
}

.app-layout {
  width: 100%;
  height: 100vh;
  background: var(--bg);
  color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;

  transition: background 0.35s;
  transition-timing-function: ease-in !important;
}
</style>

<script>
import Sidebar from './components/Sidebar.vue';

import FinderPage from './page/files/FinderPage.vue';
import WelcomePage from './page/home/WelcomePage.vue';
import EditorPage from './page/editor/EditorPage.vue';
import EnvPage from './page/env/Env.Page.vue';
import EditorPageBeta from './page/editor/EditorPageBeta.vue';


export default {
  data() {
    return {
      index: 0,
      color: "auto"
    };
  },
  mounted(){
    this.updateColor(0);
  },
  methods:{
    updateColor(newVal){
      console.log(newVal)
      switch (newVal) {
        case 0:
          this.color = "#2E2E2E";
          break;
        case 1:
          this.color = "hsla(360, 5%, 23%, 1)";
          break;
        case 2:
          this.color = "hsla(211, 5%, 23%, 1)";
          // this.color = "hsla(211, 12%, 23%, 1)";
          break;
        case 3:
          this.color = "hsla(168, 5%, 23%, 1)";
          break;
        default:
          this.color = "auto";
      }
    }
  },
  watch: {
    index(newVal, oldVal){
      this.updateColor(newVal)
    }
  },
  components: { FinderPage, Sidebar, WelcomePage, EditorPage, EnvPage, EditorPageBeta }
};
</script>