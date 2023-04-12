<template>
  <div :class="{ ondrag: ondrag }" @drop="onDragEnd" @dragleave="onDragCancel" @dragenter="onDragStart" @drag="onDragStart" @dragexit="onDragCancel"
    @dragend="$event.preventDefault();" @dragstart="onDragStart" @dragover="onDragStart" class="draggable">
    <slot></slot>
  </div>
</template>
<style scope lang="scss">
.draggable {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: all 0.35s;

  position: relative;
}

.ondrag {
  opacity: 0.35;
}

// .hint-container {
//   color: black;

//   .hint {
//     background-color: white;
//     padding: 32px 64px;
//     border-radius: 10px;
//   }


//   position: absolute;
//   top:0;
//   bottom:0;
//   left: 0;
//   right: 0;

//   overflow: hidden;


//   display: flex;
//   align-items: center;
//   justify-content: center;

//   transition: all 0.35s;
//   transition-timing-function: ease-in-out !important;

//   transform-origin: center center;
//   overflow:hidden;
// }

// .v-enter-active,
// .v-leave-active {

//   &,
//   & .hint {

//     transition: all 0.15s;
//     transition-delay: 0.15s;
//     transition-timing-function: ease-in-out;
//   }
// }

// .v-enter-from,
// .v-leave-to {
//   .hint {
//     transform: scale(1.12);
//     opacity: 0;
//   }
// }

// .v-enter-to,
// .v-leave-from {
//   .hint {
//     opacity: 1;
//     transform: scale(1);
//   }
// }
</style>

<script>
export default {
  data() {
    return {
      ondrag: false
    };
  },
  methods: {
    onDragStart(e) {
      e.preventDefault();
      this.ondrag = true;
      console.log("start");
    },
    onDragCancel(e) {
      e.preventDefault();
      this.ondrag = false;
      console.log("cancel", e);
    },
    onDragEnd(e) {
      e.preventDefault();
      this.ondrag = false;
      const item = e.dataTransfer.files[0];
      do {
        if (!item) break;
        if (item.type) break;
        console.log("folder!!! yeah!!!");
        this.$emit('open', item);
      } while (false);
      console.log("end")
    }
  }
}
</script>