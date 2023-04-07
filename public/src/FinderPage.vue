<template>
<div id="finder-page">

  <GitBtns v-on:open-git="enableGit = true; cardFocus = false"></GitBtns>
  
  <div class="title">
    $ (no workspace is open)
    <div class="subtitle">please click the button in the middle to open your workspace</div>
  </div>


  <div class="layout">
    <div id="left">
      <div class="stage" v-bind:class="{close: cardFocus}">
        <div id="left">
          <div>Unstage</div>
        </div>
        <div id="right"></div>
      </div>
      <FolderCard v-bind:focus="cardFocus" ref="fcard"/>
    </div>
    <GitSideBtns
      v-bind:enable="enableGit" 
      v-on:card-fullscreen="fullscreenCard"
      v-on:card-forward="moveCard"
      v-on:card-backward="moveCardBackward"
      v-on:card-focus="focusCard"
    />

  </div>
</div>
</template>

<style scoped>
#finder-page{
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

#finder-page .stage{
  background: rgba(255,255,255,0.75);
  color: black;
  border-radius: 14px;
  height: 160px;

  display: flex;
  flex-direction: row;
  gap: 32px;
  transition: all 0.35s;
}

#finder-page .stage>*{
  padding: 24px 32px;
  flex: 1;
}

#finder-page .stage.close{
  transform-style: preserve-3d;
  transform: perspective(1500px) rotateX(90deg);
  height: 0px;
}

#finder-page .subtitle{
  opacity: 0.5;
}

#finder-page .layout{
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  /* gap: 32px; */
  /* margin-left: -32px; */
  /* padding-left: 32px; */
}

.layout>*{
  margin-left:32px;
}

.layout>*:first-child{
  margin-left: 0px;
}

#finder-page #left{
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  flex: 1;
  /* overflow:hidden; */
}
</style>

<script>
import FolderCard from "./components/FolderCard.vue";
import GitSideBtns from "./components/GitSideBtns.vue";
import GitBtns from "./components/GitBtn.vue";

export default {
    data() {
        return {
            animatedForward: false,
            animatedBackword: 0,
            cardFocus: true,
            enableGit: false,
            stageEnable: false
            // forceFocus: false,
            // forceUnfocus: false,
            // cardFullscreen: false
        };
    },
    methods: {
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
            await new Promise(e => setTimeout(e, 500));
            this.enableGit = false;
        }
    },
    components: { FolderCard, GitSideBtns,GitBtns }
};
</script>