<template>
  <div class="btns-container" v-bind:class="{ fullscreen: !enable }">
    <div class="btns" v-bind:class="{ fullscreen: !enable }">
      <!-- <button v-on:click="$emit('card-forward')" class="material-symbols-rounded">keyboard_arrow_up</button>
      <label for="">last</label> -->

      <button v-on:click="$emit('card-backward')" class="material-symbols-rounded">vertical_align_bottom</button>
      <label for="">head</label>

      <button v-on:click="$emit('card-focus')" class="material-symbols-rounded">inbox</button>
      <label for="">focus</label>

      <button v-on:click="$emit('card-fullscreen')" class="material-symbols-rounded">cancel</button>
      <label for="">close</label>

      <!-- <button>commit</button> -->
    </div>
  </div>
</template>

<style scoped>
button{
  cursor: pointer;
}

button+label:not(:last-child){
  margin-bottom: 24px;
}

button+label{
  width: 50px;
  text-align: center;
  /* margin-top: -10px; */
  font-size: 11px;
}
.btns button{
  padding: 8px;
  color: white;
  background-color: rgba(255,255,255,0.15) !important;
  /* color:white; */
  /* background-color: transparent; */
  /* border: white 2pt solid; */

  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;

  border:none;
  outline:none;

  transition: background 0.25s;
}

button:hover{
  background-color: rgba(255,255,255,0.35) !important;
}

.btns-container{
  --width: 120px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  transition: all 0.35s;

  width: 60px;
  max-width: 1000px;

  overflow-x: hidden;
}

.btns-container.fullscreen{
  width: 0;
  padding:0px !important;
  margin-left: 0px !important;
  margin: 0px !important;
}

#finder-page .layout .btns{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  padding-bottom: 32px;
  width: var(--width);
  min-width: 100px;
}

.btns.fullscreen{
  box-sizing: border-box;
  overflow-x: hidden;
  width: 0px !important;
  /* margin-right: -132px; */
  transition: all 0.35s;
  /* transition: margin 0.35s; */
  /* transform-style: preserve-3d;
  transform: perspective(1500px) rotateY(90deg);
  transition-timing-function: ease-in-out; */
}
</style>

<script>
export default {
  props:{
    enable: Boolean
  },
  data() {
  },
  methods: {
  },
};
</script>