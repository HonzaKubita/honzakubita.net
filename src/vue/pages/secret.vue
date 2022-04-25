<template>
  <button id="nextVuePage" class="s-main-title">This is a piece of text on a button</button>
</template>

<style>
.s-main-title {
  font-family: 'Nope not there', sans-serif;
}
</style>

<script>
export default {
  name: 'secret',
  mounted() {
    document.getElementById("nextVuePage").addEventListener("click", () => {
      // This is the end thank you for playing
      console.log('And it does not work');
    });
  }
}

</script>