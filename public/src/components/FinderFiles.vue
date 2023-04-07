<template>
<div id="finder-files">
  <div class="title">
    commit: 432ab0
  </div>
  <div class="files">
    <div v-for="file in files" class="file">
      <div class="icon"></div>
      {{file}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      files: ["README.md", ".gitignore"]
    };
  },
};
</script>