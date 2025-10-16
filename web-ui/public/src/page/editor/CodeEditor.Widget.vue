<template>
  <div class="codemirror-container">
    <div class="codemirror">
      <CodeMirrorEditor></CodeMirrorEditor>
    </div>
  </div>
</template>

<style>
.codemirror-container {
  overflow: hidden;
  box-sizing: border-box;
  /* border-radius: 8px 8px 14px 14px; */
  border-radius: 14px;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 8px 0px;
}

.codemirror {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

<script>
import CodeMirrorEditor from '../../components/CodeMirrorEditor.vue';


export default {
  data(){
    return {};
  },
  components:{
    CodeMirrorEditor
}
}
</script>