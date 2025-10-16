<template>
  <div class="tabs-outline-container">
    <div class="tabs-container">
      <div class="tabs">
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
        <div class="label">index.js <button class="close material-symbols-rounded">close</button></div>
      </div>
      <div class="label material-symbols-rounded" style="font-size: 16px;padding: 8px;margin-bottom: 5px;right:0;position:sticky;">add</div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>




.tabs-outline-container{
  display: flex;
  flex-direction: row;

  align-items:flex-end;
  align-content:flex-end;
  justify-content: flex-end;
  gap: 32px;
}

.tabs-container {
  display: flex;
  flex-direction: row;
  /* border-radius: 14px 14px 0px 0px; */
  border-radius: 10px;
  overflow: hidden;
  margin-right: auto;
}

.tabs {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex: 1;
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
  background: rgba(255,255,255,0); 
}

/* Handle on hover */
.tabs:hover::-webkit-scrollbar-thumb,.tabs::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.15); 
}

.label {
  cursor: pointer;
  padding: 8px 16px;
  padding-right: 8px;
  border-radius: 10px;
  /* border-radius: 3px 3px 0 0; */
  /* background: rgba(255,255,255,0.15); */
  font-size: 14px;


  /* border: 1.2px solid white; */
  background: rgba(255, 255, 255, 0.1);

  transition: background 0.15s;
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
  /* box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5); */
}
</style>

<script>
export default {
  data() {
    return {}
  }
}
</script>