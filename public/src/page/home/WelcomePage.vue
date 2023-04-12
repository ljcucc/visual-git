<template>
  <div id="welcome">
    <DragOpenWidget>
      <div class="col">
        <div>Visual Git<br><span style="opacity: 0.5;">Feel the touch and pleasure of creating and developing.</span>
        </div>
        <div style="flex: 1;"></div>
        <div>
          <p style="margin-bottom: 2rem;">Projects</p>

          <span style="opacity: 0.5;">
            ( You have no project [yet]. )
          </span>
        </div>
      </div>
    </DragOpenWidget>
  </div>
</template>

<style scoped>
#welcome {
  padding: 32px;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
}

.col{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
}
</style>

<script>
import DragOpenWidget from '../files/DragOpen.Widget.vue';

export default {
  data() {
    return {};
  },
  components: { DragOpenWidget }
};
</script>