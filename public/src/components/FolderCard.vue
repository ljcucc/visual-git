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

<script>
import FinderFiles from './FinderFiles.vue';

export default {
    props: {
        focus: Boolean
    },
    data() {
        return {
            animatedForward: false,
            animatedBackword: 0,
            forceFocus: false,
            forceUnfocus: false,
        };
    },
    methods: {
        async forward() {
            if (this.animatedBackword != 0 || this.animatedForward || this.forceFocus)
                return;
            this.animatedForward = true;
            await new Promise(e => setTimeout(e, 450));
            this.animatedForward = false;
        },
        async backward() {
            if (this.animatedBackword != 0 || this.animatedForward || this.forceFocus)
                return;
            this.animatedBackword = 1;
            await new Promise(e => setTimeout(e, 100));
            this.animatedBackword = 2;
            await new Promise(e => setTimeout(e, 450));
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