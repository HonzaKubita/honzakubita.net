<template>
<div class="projects-main-div">
  <div class="directory-title-container">
    <h1 @click="back" class="main-title directory-back">/usr/webpage</h1>
    <h1 class="main-title">/projects</h1>
  </div>
  <div class="disk-main-container">
    <floppyDisk color="red" link="countdown">New Year Countdown</floppyDisk>
    <floppyDisk color="green" link="https://github.com/HonzaKubita/_Chess">_Chess</floppyDisk>
    <floppyDisk color="blue" link="https://github.com/HonzaKubita/batchChat">batchChat</floppyDisk>
    <floppyDisk color="yellow" link="https://github.com/dumba/t-rex">T-rex Multiplayer</floppyDisk>
    <floppyDisk color="purple" link="https://luacy.net/">Luacy mc server</floppyDisk>
    <floppyDisk color="red" link="https://honzakubita.net/randomenator">JS randomenator</floppyDisk>
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
  },
}
</script>

<style>
.projects-main-div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.disk-main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  overflow-y: scroll;
}

@media screen and (max-width: 700px) {
  .disk-main-container {
    max-height: 100%;
  }
}
</style>
