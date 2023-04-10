<template>
  <div class="btn">
    <button v-on:click="$emit('open-git')" class="material-symbols-rounded">construction</button>
    <label for="">tools</label>
  </div>
</template>

<style scoped>
.btn{
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: -12px;
}

button+label{
  width: 50px;
  text-align: center;
  font-size: 11px;
  /* display: none; */
}

button:hover+label{
  /* position:absolute; */
  /* top:0; */
  /* display: block; */
  /* top: 55px; */
}

button{
  cursor: pointer;
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
</style>

<script>
</script>