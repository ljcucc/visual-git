<template>
  <div style="outline:none;box-sizing: border-box;height: 100%;" tabindex="0" @keydown="onkey">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    onkey(e) {
      if (!e.metaKey && !e.ctrlKey) {
        return;
      }
      console.log("meta!!")
      switch (e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
          this.$emit(e.code.toLowerCase());
          break;
        default:
          return;
      }
      e.preventDefault();
      console.log(e);
    }
  }
}
</script>