<template>
  <div id="finder-page">

    <GitBtns v-on:open-git="onGitBtn"></GitBtns>

    <ProjectTitle v-on:wheel="onWheel" title="$ (no workspace is open)"
      subtitle="Please open your workspace at home page"></ProjectTitle>

    <div class="layout">

      <!-- <div class="card" style="flex:0.5">hi</div> -->

      <div id="left">
        <div class="stage" v-bind:class="{ close: cardFocus }" v-on:wheel="onWheel">
          <div id="left">
            <div>Unstage</div>
          </div>
          <div id="right"></div>
        </div>
        <!-- <TabsBar></TabsBar> -->

        <div class="row">
          <FolderCard v-on:wheel="onCardWheel" v-bind:focus="cardFocus" ref="fcard">
            <FilesWidget></FilesWidget>
          </FolderCard>
        </div>

      </div>

      <GitSideBtns v-on:wheel="onWheel" v-bind:enable="enableGit" v-on:card-fullscreen="fullscreenCard"
        v-on:card-forward="moveCard" v-on:card-backward="moveCardBackward" v-on:card-focus="focusCard" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
#finder-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 32px;

  padding: 32px;
  padding-bottom: 0px;

  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
}

#finder-page .stage {
  background: rgba(255, 255, 255, 0.75);
  color: black;
  border-radius: 14px;
  height: 160px;

  display: flex;
  flex-direction: row;
  gap: 32px;
  transition: all 0.35s;

  &:not(.close){
    margin-top: 16px;
  }
}

#finder-page .stage>* {
  padding: 24px 32px;
  flex: 1;
}

#finder-page .stage.close {
  transform-style: preserve-3d;
  transform: perspective(1500px) rotateX(90deg);
  height: 0px;
}

#finder-page .layout {
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  /* gap: 32px; */
  /* margin-left: -32px; */
  /* padding-left: 32px; */
  box-sizing: border-box;
}

.layout>* {
  margin-left: 32px;
}

.layout>*:first-child {
  margin-left: 0px;
}

#finder-page #left {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  /* overflow:hidden; */
}

.row{
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1;
  gap: 32px;
}

.card{
  box-sizing: border-box;
  border-radius: 14px;
  color: black;
  background-color: white;
  // flex: 1;
  padding: 16px;

    margin-top: 16px;
    margin-bottom: 32px;
}
</style>

<script>
import FolderCard from "./FolderCard.vue";
import GitSideBtns from "./GitSideBtns.vue";
import GitBtns from "./GitBtn.vue";
import ProjectTitle from "../../components/ProjectTitle.vue";
import FinderFiles from "./Files.Widget.vue";
import FilesWidget from "./Files.Widget.vue";

export default {
  data() {
    return {
      animatedForward: false,
      animatedBackword: 0,
      cardFocus: true,
      enableGit: false,
      stageEnable: false
    };
  },
  methods: {
    async onCardWheel(e) {
      // this.onWheel(e, true);
    },
    async onWheel(e, oncard) {
      e.preventDefault();
      console.log(e);

      if (this.onWheeling) return;

      if (e.deltaY < -50) {
        this.onWheeling = true;

        if (!this.enableGit) {
          if (oncard != true) {
            this.enableGit = true;
            this.focusCard();
          }
        } else if (!this.cardFocus) {
          this.moveCard();
        } else if (this.cardFocus) {
          if (oncard != true) {
            this.focusCard()
          }
        }
      }
      else if (e.deltaY > 50) {
        this.onWheeling = true;

        if (!this.cardFocus) {
          this.focusCard();
        }
      }
      else return;


      await new Promise(e => setTimeout(e, 500));
      this.onWheeling = false;
    },
    async moveCard() {
      this.$refs.fcard.forward();
    },
    async moveCardBackward() {
      this.$refs.fcard.backward();
    },
    async focusCard() {
      this.cardFocus = !this.cardFocus;
    },
    async fullscreenCard() {
      this.stageEnable = false;
      this.cardFocus = true;
      await new Promise(e => setTimeout(e, 200));
      this.enableGit = false;
    },
    async onGitBtn() {
      if (this.enableGit)
        this.fullscreenCard()
      else { this.enableGit = true; this.cardFocus = false }
    }
  },
  components: { FolderCard, GitSideBtns, GitBtns, ProjectTitle, FilesWidget }
};
</script>