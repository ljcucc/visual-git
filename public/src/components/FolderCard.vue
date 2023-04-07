<template>
<div class="cards" v-bind:class="{unfocus: !forceFocus}">
  <div v-on:click="forward" style="--m:3; --ma:2; --o: 0; --oa: 0.5;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
  <div v-on:click="forward" style="--m:2; --ma:1; --o: 0.5; --oa: 0.5;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
  <div v-on:click="forward" style="--m:1; --ma:0; --o: 0.5; --oa:1;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
  <div style="--m:0; --ma:-1; --o: 1; --oa: 0;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus, fullscreen: cardFullscreen}">
    <FinderFiles></FinderFiles>
  </div>
</div>
</template>

<style scoped>
.card{
  background-color: white;
  border-radius: 14px 14px 0 0;
  /* border-radius: 14px; */
  /* height: 100%; */

  opacity: var(--o);
  margin: 0 calc( 32px * var(--m));
  position: absolute;
  top: calc( 100px - var(--m) * 32px );
  bottom: 0;
  left: 0;
  right: 0;

  /* transition-timing-function: ease-in-out !important; */
}

.card.before-moved{
  transition: opacity 0.35s, margin 0.35s, top 0.35s;
}

.card.moved{
  opacity: var(--oa) !important;
  margin: 0 calc( 32px * var(--ma)) !important;
  top: calc( 100px - var(--ma) * 32px ) !important;
}

.card.move{
  transition: opacity 0.45s, margin 0.45s, top 0.45s;
  opacity: var(--oa) !important;
  margin: 0 calc( 32px * var(--ma)) !important;
  top: calc( 100px - var(--ma) * 32px ) !important;
}

.card.focus{
  transition: opacity 0.35s, margin 0.35s, top 0.35s;
  top: 16px !important;
}

.card.unfocus{
  transition: opacity 0.35s, margin 0.35s, top 0.35s;
}
.cards{
  position:relative;
  flex: 1;
  max-width: 100%;
  transition: width 0.35s;

  /* left: 100px; */
  /* height: 100%; */
  /* height: calc(100% - 256px); */
}

 .cards.unfocus{
  transition: all 0.35s;
  transform-style: preserve-3d;
  transform: perspective(1500px) rotateX(-3deg);
  transition-timing-function: ease-in-out;
}
</style>

<script>
import FinderFiles from './FinderFiles.vue';

export default {
    props: {
        focus: Boolean
    },
    created(){
      // this.forceUnfocus = true;
    },
    data() {
        return {
            animatedForward: false,
            animatedBackword: 0,
            forceFocus: true,
            forceUnfocus: false,
        };
    },
    methods: {
        async forward() {
            if (this.animatedBackword != 0 || this.animatedForward || this.forceFocus)
                return;
            this.animatedForward = true;
            await new Promise(e => setTimeout(e, 600));
            this.animatedForward = false;
        },
        async backward() {
            if (this.animatedBackword != 0 || this.animatedForward || this.forceFocus)
                return;
            this.animatedBackword = 1;
            await new Promise(e => setTimeout(e, 10));
            this.animatedBackword = 2;
            await new Promise(e => setTimeout(e, 1500));
            this.animatedBackword = 0;
        },
        async toggleFocus() {
            // this.forceFocus = !this.forceFocus;
            // console.log("focus");
            // if(!this.forceFocus){
            //   this.forceUnfocus = true;
            //   await new Promise(e => setTimeout(e, 450));
            //   this.forceUnfocus = false;
            // }
        },
    },
    watch: {
        async focus() {
            this.forceFocus = this.focus;
            if (!this.forceFocus) {
                this.forceUnfocus = true;
                await new Promise(e => setTimeout(e, 450));
                this.forceUnfocus = false;
            }
        }
    },
    components: { FinderFiles }
};
</script>