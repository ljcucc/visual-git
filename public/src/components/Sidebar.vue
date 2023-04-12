<template>
  <div id="sidebar" v-on:wheel="onWheel">
    <!-- <div style="flex: 1;"></div> -->
    <button v-on:click="$emit('update:index', 0); index = 0" v-bind:class="{ sel: index == 0 }"
      class="material-symbols-rounded">
      <img src="../../icons/home_white_24dp.svg" alt="" srcset="">
    </button>
    <label for="">projects</label>
    <!-- <div style="flex: 1;"></div> -->

    <button v-on:click="$emit('update:index', 1); index = 1" v-bind:class="{ sel: index == 1 }"
      class="material-symbols-rounded">
      <img src="../../icons/folder_white_24dp.svg" alt="" srcset="">
    </button>
    <label for="">files</label>

    <button v-on:click="$emit('update:index', 2); index = 2" v-bind:class="{ sel: index == 2 }"
      class="material-symbols-rounded">
      <img src="../../icons/code_white_24dp.svg" alt="" srcset="">
    </button>
    <label for="">editor</label>

    <button v-on:click="$emit('update:index', 3); index = 3" v-bind:class="{ sel: index == 3 }"
      class="material-symbols-rounded">
      <img src="../../icons/dashboard_white_24dp.svg" alt="" srcset="">
    </button>
    <label for="">console</label>

    <!-- <button v-on:click="" class="material-symbols-rounded">grid_view</button>
    <label for="">tools</label> -->

    <div style="flex: 1;"></div>

    <button v-on:click="$emit('open-git')" class="material-symbols-rounded">settings</button>
    <label for="">settings</label>
    <!-- <div style="flex: 1;"></div> -->
  </div>
</template>

<style lang="scss" scoped>
.sel,
.sel:hover {
  background-color: rgba(255, 255, 255, 0.35) !important;
}

#sidebar {
  // padding: 28px 0px 16px 24px;
  padding: 30px 0px 16px 24px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;

  * {
    transition-timing-function: ease-in-out !important;
  }
}

button+label {
  width: 50px;
  // width: 30px;
  text-align: center;
  font-size: 11px;
  margin-bottom: 16px;
  // opacity: 0.5;
  // transition: opacity 0.15s;
  // transition-timing-function: ease-in-out !important;

  // visibility: hidden;
}

button:hover+label{
  // opacity: 1;
}

button {
  cursor: pointer;
  padding: 8px;
  color: white;
  background-color: rgba(255, 255, 255, 0.05) !important;
  /* color:white; */
  /* background-color: transparent; */
  /* border: white 2pt solid; */

  width: 50px;
  height: 50px;
  border-radius: 100%;
  text-align: center;

  border: none;
  outline: none;

  transition: background 0.25s;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.15) !important;
}
</style>

<script>
export default {
  props: ['maxIndex'],
  emits: ['update:index'],
  data() {
    return {
      index: 0,
      scrolling: false
    };
  },
  methods: {
    async onWheel(e) {
      e.preventDefault();
      console.log(e);

      if (this.scrolling) return;
      if (e.deltaY < -50) {
        this.index--;
      }
      else if (e.deltaY > 50) {
        this.index++;
      } else return;
      this.scrolling = true;

      if (this.index < 0) this.index = 0;
      else if (this.index > this.maxIndex) this.index = this.maxIndex;
      console.log("scroll!", this.index);
      this.$emit('update:index', this.index)

      await new Promise(e => setTimeout(e, 500));
      this.scrolling = false;
    }
  }
};
</script>