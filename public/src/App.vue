<template>
  <KeyboardShortcut 
  @digit1="index=0"
  @digit2="index=1"
  @digit3="index=2"
  @digit4="index=3"
  >
    <div class="app-layout" :style="{ '--bg': color }">
      <Sidebar ref="sb" v-model:index="index" :max-index="1"></Sidebar>
      <div id="pages">
        <div class="page-switcher" v-bind:style="{ marginTop: `calc(${index*-1} * var(--full-height))`  }"></div>
        <FinderPage ></FinderPage>
        <SettingsPage></SettingsPage>
      </div>
    </div>
  </KeyboardShortcut>
</template>

<style scoped>

/* .v-enter-active, .v-leave-active{
  transition: all 0.35s;
  overflow: hidden;
}

.v-enter-from{
  height: 0;
}

.v-enter-to{
  height: auto;
} */

.page-switcher {
  transition-timing-function: cubic-bezier(0, 1, 0, 1) !important;
  transition: margin 0.5s;
  /* transition: margin 0.5s; */
}

#pages {
  flex: 1;
  overflow-y: hidden;
}

.app-layout {
  width: 100%;
  height: 100%;
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

import FinderPage from './page/files/Files.Page.vue';
import SettingsPage from './page/settings/Settings.Page.vue';
import KeyboardShortcut from './components/KeyboardShortcut.vue';


export default {
  data() {
    return {
      index: 0,
      color: "auto"
    };
  },
  mounted() {
    this.updateColor(0);
  },
  methods: {
    updateColor(newVal) {
      console.log(newVal)
      switch (newVal) {
        case 0:
          this.color = "hsla(360, 5%, 23%, 1)";
          break;
        case 1:
          this.color = "#2E2E2E";
          break;
        default:
          this.color = "auto";
      }
    }
  },
  watch: {
    index(newVal, oldVal) {
      this.updateColor(newVal)
    }
  },
  components: { FinderPage, Sidebar, SettingsPage, KeyboardShortcut }
};
</script>