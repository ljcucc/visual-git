<template>
  <Transition name="git">
    <div v-if="enable" class="btns-container">
      <div class="btns">

        <button v-on:click="" class="material-symbols-rounded">
          <img src="../../../icons/alt_route_white_24dp.svg" alt="" srcset="">
        </button>
        <label for="">branch</label>

        <button v-on:click="" class="material-symbols-rounded">
          <img src="../../../icons/schema_white_24dp.svg" alt="" srcset="">
        </button>
        <label for="">commits</label>

        <button v-on:click="$emit('card-backward')" class="material-symbols-rounded">
          <img src="../../../icons/vertical_align_bottom_white_24dp.svg" alt="" srcset="">
        </button>
        <label for="">head</label>

        <button v-on:click="$emit('card-focus')" class="material-symbols-rounded">
          <img src="../../../icons/inbox_white_24dp.svg" alt="" srcset="">
        </button>
        <label for="">focus</label>

        <!-- <button v-on:click="$emit('card-fullscreen')" class="material-symbols-rounded">
          <img src="../../../icons/cancel_white_24dp.svg" alt="" srcset="">
        </button>
        <label for="">close</label> -->

      </div>
    </div>
  </Transition>
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

.btns-container,.git-enter-to{
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

/* .btns-container.fullscreen, */
.git-enter-from,.git-leave-to{
  width: 0;
  padding:0px !important;
  margin-left: 0px !important;
  margin: 0px !important;
}

.git-enter-to .btns,.btns{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  padding-bottom: 32px;
  width: var(--width);
  min-width: 100px;
}

.git-leave-to .btns, .git-enter-from .btns{
  box-sizing: border-box;
  overflow-x: hidden;
  width: 0px !important;
  transition: all 0.35s;
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