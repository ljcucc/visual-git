<template>
  <div class="app-layout">
    <Sidebar v-model:index="index" :max-index="3"></Sidebar>
    <div id="pages">
      <div class="page-switcher" v-bind:style="{marginTop:index*100*-1+'vh'}"></div>
      <WelcomePage></WelcomePage>
      <FinderPage ></FinderPage>
      <EditorPage></EditorPage>
      <EnvPage></EnvPage>
    </div>
  </div>
</template>

<style scoped>
.page-switcher{
  transition-timing-function: cubic-bezier(0,1,0,1) !important;
  transition: margin 0.5s;
}
#pages{
  flex: 1;
  overflow-y: hidden;
}
.app-layout{
  width: 100%;
  height:100vh;
  background: var(--bg);
  color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
}
</style>

<script>
import Sidebar from './components/Sidebar.vue';

import FinderPage from './page/files/FinderPage.vue';
import WelcomePage from './page/home/WelcomePage.vue';
import EditorPage from './page/editor/EditorPage.vue';
import EnvPage from './page/env/Env.Page.vue';


export default {
    data() {
        return {
          index: 0
        };
  },
  components: { FinderPage, Sidebar, WelcomePage, EditorPage, EnvPage }
};
</script>