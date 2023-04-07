<template>
<div class="btns-container" v-bind:class="{fullscreen: !enable}">
  <div class="btns" v-bind:class="{fullscreen: !enable}">
    <button v-on:click="$emit('card-forward')">forward</button>
    <button v-on:click="$emit('card-backward')">backword</button>
    <button v-on:click="$emit('card-focus')">focus</button>
    <button v-on:click="$emit('card-fullscreen')">fullscreen</button>
    <button>commit</button>
  </div>
</div>
</template>

<style>
.btns button{
  padding: 8px;
  color: black;
  background: white;
  max-width: 1000px;
  border-radius: 100px;
  text-align: center;

  border:none;
  outline:none;
}

.btns-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-left: -32px;
  padding-left: 32px;
  margin-right: -32px;
  transition: all 0.35s;

  width: 132px;
  max-width: 1000px;

  overflow-x: hidden;
}

.btns-container.fullscreen{
  width: 0;
  /* padding:0px !important; */
  /* margin: 0px !important; */
}

#finder-page .layout .btns{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  padding-bottom: 32px;
  width: 100px;
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