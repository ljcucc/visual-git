<template>
<div id="finder-files">
  <div class="title">
    # 432ab0 <br>
    : some changed
  </div>
  <div class="files">
    <div v-for="file in files" class="file">
      <div class="icon"></div>
      {{file}}
    </div>
  </div>
</div>
</template>

<style scoped>
#finder-files{
  color: #000;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 48px;
}

#finder-files .title{
  border-left: 5px solid #F34949;
  padding: 8px;
  padding-left: 16px;
}

#finder-files .files {
  flex: 1;
  display: flex;
  flex: row wrap;
  gap: 32px;
}

#finder-files .file {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80px;
  cursor: pointer;
}
#finder-files .file:hover .icon{
  opacity: 1;
}

#finder-files .file .icon{
  height: 90px;
  width: 75px;
  background: rgba(0,0,0,0.5);
  opacity: 0.5;
  border-radius: 4px 24px 4px 4px;
  transition: opacity 0.15s;
}
</style>

<script>
export default {
  data() {
    return {
      files: ["README.md", ".gitignore"]
    };
  },
};
</script>