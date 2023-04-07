<template>
  <div id="sidebar">
    <button v-on:click="$emit('update:index', 0);index = 0" v-bind:class="{sel: index==0}" class="material-symbols-rounded">home</button>
    <label for="">projects</label>

    <button v-on:click="$emit('update:index', 1);index = 1" v-bind:class="{sel: index==1}" class="material-symbols-rounded">folder</button>
    <label for="">files</label>

    <button v-on:click="$emit('update:index', 2);index = 2" v-bind:class="{sel: index==2}" class="material-symbols-rounded">code</button>
    <label for="">editor</label>

    <div style="flex: 1;"></div>

    <button v-on:click="$emit('open-git')" class="material-symbols-rounded">settings</button>
    <label for="">settings</label>
  </div>
</template>

<style scoped>
.sel,.sel:hover{
  background-color: rgba(255,255,255,0.35) !important;
}

#sidebar{
  padding: 24px 0px 0px 24px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
button+label{
  width: 50px;
  text-align: center;
  font-size: 11px;
  margin-bottom: 16px;
}
button{
  cursor: pointer;
  padding: 8px;
  color: white;
  background-color: rgba(255,255,255,0.05) !important;
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
  background-color: rgba(255,255,255,0.15) !important;
}
</style>

<script>
export default {
  emits: ['update:index'],
  data(){
    return {
      index: 0
    };
  },
  methods:{
  }
};
</script>