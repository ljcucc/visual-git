<template>
  <div class="git-btn">
    <button v-on:click="$emit('open-git')" class="material-symbols-rounded">
      <img src="../../../icons/fork_left_white_24dp.svg" alt="" srcset="">
    </button>
    <label for="">git</label>
  </div>
</template>

<style scoped>
.git-btn{
  z-index: 10000;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 24px;
  right: 32px;
  gap: 8px;
}

button+label{
  width: 50px;
  text-align: center;
  font-size: 11px;
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