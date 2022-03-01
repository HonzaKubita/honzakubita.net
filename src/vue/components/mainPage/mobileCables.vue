<template>
<div class="mobile-cables-container">
  <mobileCable label="Projects" redirect="/projects"/>
  <mobileCable label="About Me" redirect="/about"/>
  <mobileCable label="Contact" redirect="/contact"/>
</div>
</template>

<script>
import mobileCable from './mobileCable.vue'

export default {
  name: 'mobileCables',
  components: {
    mobileCable
  }
}
</script>

<style>
.mobile-cables-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
