<template>
  <div class="app-layout">
    <Sidebar v-model:index="index"></Sidebar>
    <div id="pages">
      <div class="page-switcher" v-bind:style="{marginTop:index*100*-1+'vh'}"></div>
      <WelcomePage></WelcomePage>
      <FinderPage ></FinderPage>
    </div>
  </div>
</template>

<style scoped>
.page-switcher{
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
import FinderPage from './FinderPage.vue';
import Sidebar from './components/Sidebar.vue';
import WelcomePage from './components/WelcomePage.vue';


export default {
    data() {
        return {
          index: 0
        };
    },
    components: { FinderPage, Sidebar, WelcomePage }
};
</script>