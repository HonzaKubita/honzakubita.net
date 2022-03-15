<template>
<div class="projects-main-div">
  <div class="directory-title-container">
    <h1 @click="back" class="main-title directory-back">C:\webpage</h1>
    <h1 class="main-title">\projects</h1>
  </div>
  <div class="disk-container1">
    <div class="disk-container2">
      <floppyDisk color="red" link="countdown">New Year Countdown</floppyDisk>
      <floppyDisk color="green" link="https://github.com/HonzaKubita/_Chess">_Chess</floppyDisk>
    </div>
    <div class="disk-container2">
      <floppyDisk color="blue" link="https://github.com/HonzaKubita/batchChat">batchChat</floppyDisk>
      <floppyDisk color="yellow" link="https://github.com/dumba/t-rex">T-rex Multiplayer</floppyDisk>
    </div>
    <div class="disk-container2">
      <floppyDisk color="purple" link="https://luacy.net/">Luacy mc server</floppyDisk>
    </div>
  </div>
  
</div>
</template>

<script>
import floppyDisk from '../components/floppyDisk.vue'

export default {
  name: 'projects',
  components: {
    floppyDisk
  },
  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.projects-main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: visible;
}
.disk-container1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.disk-container2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1100px) {
  .disk-container2 {
    flex-direction: column;
  } 
}
@media screen and (max-width: 550px) {
  .disk-container1 {
    flex-direction: column;
  }
}
</style>
