<template>
<div id="finder-page">
  <div class="title">
    $ (no workspace is open)
    <div class="subtitle">please click the button in the middle to open your workspace</div>
  </div>


  <div class="layout">
    <div id="left">
      <div class="stage" v-bind:class="{close: !stageEnable}">
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

<script>
import FolderCard from "./components/FolderCard.vue";
import GitSideBtns from "./components/GitSideBtns.vue";

export default {
    data() {
        return {
            animatedForward: false,
            animatedBackword: 0,
            cardFocus: false,
            enableGit: true,
            stageEnable: true
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
            await new Promise(e => setTimeout(e, 250));
            this.enableGit = false;
        }
    },
    components: { FolderCard, GitSideBtns }
};
</script>