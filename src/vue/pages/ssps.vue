<template>
<div class="ssps-main-div">
  <h1 class="main-title">SSPS</h1>
  <floppyDisk color="blue" link="JANSIMONKUBITA.zip">SSPS - soubory</floppyDisk>
</div>
</template>

<script>
import floppyDisk from '../components/floppyDisk.vue'

export default {
  name: 'SSPS',
  components: {
    floppyDisk
  }
}
</script>

<style>
.ssps-main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
