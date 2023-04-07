const html = (e)=>e.join("").trim();
const template = html`
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
      <folder-card v-bind:focus="cardFocus" ref="fcard"></folder-card>
    </div>
    <div class="btns-container" v-bind:class="{fullscreen: !enableGit}">
      <div class="btns" v-bind:class="{fullscreen: !enableGit}">
        <button v-on:click="moveCard">forward</button>
        <button v-on:click="moveCardBackward">backword</button>
        <button v-on:click="focusCard">focus</button>
        <button v-on:click="fullscreenCard">fullscreen</button>
        <button>commit</button>
      </div>
    </div>
  </div>
</div>
`;

export default {
  data () {
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
  methods:{
    async moveCard(){
      this.$refs.fcard.forward();
    },

    async moveCardBackward(){
      this.$refs.fcard.backward();
    },
    async focusCard(){
      this.cardFocus = !this.cardFocus;
    },
    async fullscreenCard(){
      this.stageEnable = false;
      this.cardFocus = true;
      await new Promise(e => setTimeout(e, 250));
      this.enableGit = false;

    }
  },
  template
};
