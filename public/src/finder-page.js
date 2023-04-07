const html = (e)=>e.join("").trim();
const template = html`
<div id="finder-page">
  <div class="title">
    $ (no workspace is open)
    <div class="subtitle">please click the button in the middle to open your workspace</div>
  </div>


  <div class="layout">
    <div id="left">
      <div class="stage">
        <div id="left">
          <div>Unstage</div>
        </div>
        <div id="right"></div>
      </div>
      <div class="cards">
        <div v-on:click="moveCard" style="--m:3; --ma:2; --o: 0; --oa: 0.5;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
        <div v-on:click="moveCard" style="--m:2; --ma:1; --o: 0.5; --oa: 0.5;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
        <div v-on:click="moveCard" style="--m:1; --ma:0; --o: 0.5; --oa:1;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}"></div>
        <div style="--m:0; --ma:-1; --o: 1; --oa: 0;" class="card" v-bind:class="{move: animatedForward, moved:animatedBackword==1, 'before-moved': animatedBackword==2, 'focus': forceFocus, 'unfocus': forceUnfocus}">
          <finder-files></finder-files>
        </div>
      </div>
    </div>
    <div class="btns">
      <button v-on:click="moveCard">forward</button>
      <button v-on:click="moveCardBackward">backword</button>
      <button v-on:click="focusCard">focus</button>
      <button>commit</button>
      <button>commit</button>
    </div>
  </div>
</div>
`;

export default {
  data () {
    return {
      animatedForward: false,
      animatedBackword: 0,
      forceFocus: false,
      forceUnfocus: false
    };
  },
  methods:{
    async moveCard(){
      if(this.animatedBackword != 0 || this.animatedForward) return;

      this.animatedForward = true;
      await new Promise(e=>setTimeout(e, 450));
      this.animatedForward = false;
    },

    async moveCardBackward(){
      if(this.animatedBackword != 0 || this.animatedForward) return;

      this.animatedBackword = 1;
      await new Promise(e=>setTimeout(e, 100));
      this.animatedBackword = 2;
      await new Promise(e=>setTimeout(e, 450));
      this.animatedBackword = 0;
    },
    async focusCard(){
      this.forceFocus = !this.forceFocus;
      console.log("focus");

      if(!this.forceFocus){
        this.forceUnfocus = true;
        await new Promise(e => setTimeout(e, 450));
        this.forceUnfocus = false;
      }
    }
  },
  template
};
