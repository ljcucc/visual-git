<template>
  <div class="tabs">
    <div class="label" v-for="name in files" @click="$emit('select')">
      <span class="title">
      {{ name }} 
      </span>
      <button class="close material-symbols-rounded">close</button>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  width: 12rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* flex: 1; */
  overflow-x: auto;
  -ms-overflow-style: scrollbar;
  margin-right: 10px;
  /* margin-bottom:-5px; */
  border-radius: 10px;
  /* border-radius: 4px 4px 0 0; */
  
}

/* width */
.tabs::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}

.tabs::-ms-scrollbar {
  height: 5px;
  width: 5px;
}

/* Track */
.tabs::-webkit-scrollbar-track {
  /* background: transparent;  */
}

/* Handle */
.tabs::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0);
}

/* Handle on hover */
.tabs:hover::-webkit-scrollbar-thumb,
.tabs::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.15);
}

.label {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 8px 16px;
  padding-right: 8px;
  border-radius: 10px;
  /* border-radius: 3px 3px 0 0; */
  /* background: rgba(255,255,255,0.15); */
  font-size: 14px;


  /* border: 1.2px solid white; */
  background: rgba(255, 255, 255, 0.1);

  transition: background 0.15s, box-shadow 0.35s;
  transition-timing-function: ease-in-out !important;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.label .close {
  color: white;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 14px;
  margin-top: 0.15rem;
  transition: all 0.15s;
  cursor: pointer;
  border-radius: 3px;
}

.label .close:hover {
  color: rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.15);
}

.label:hover {
  background: rgba(255, 255, 255, 0.2);
}

.title{
  flex: 1;
}
</style>

<script>
export default {
  data() {
    return {
      files: [
        "index.js",
        "index.js",
        "index.js",
        "index.js",
      ]
    }
  }
}
</script>