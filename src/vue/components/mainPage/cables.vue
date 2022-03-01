<template>
<div class="cables-container">
  <cable class="cable" label="Projects" redirect="/projects"/>
  <cable class="cable" label="About Me" redirect="/about"/>
  <cable class="cable" label="Contact" redirect="/contact"/>
</div>
</template>

<script>
import cable from './cable.vue'

export default {
  name: 'cables',
  components: {
    cable
  }
}
</script>

<style>
.cables-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
