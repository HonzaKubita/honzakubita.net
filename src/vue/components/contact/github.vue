<template>
<div class="github-container" @click="redirect">
  <img class="github-logo" src="images/github.png">
  <p class="github-subtitle">Github</p>
  <p class="github-username">HonzaKubita</p>
</div>
</template>

<script>

export default {
  name: 'mail',
  methods: {
    redirect() {
      window.open("https://github.com/HonzaKubita", "_blank").focus();
    }
  }
}
</script>

<style>
.github-container {
  margin: 50px;
  text-align: center;
  cursor: pointer;
}
.github-subtitle {
  color: white;
  font-size: 2em;
  font-family: 'Roboto Mono', sans-serif;
}
.github-logo {
  width: 150px;
  transition: all 0.25s;
}
.github-logo:hover {
  transform: translateY(-30px);
}
.github-username {
  color: white;
  font-size: 1em;
  font-family: 'Roboto Mono', sans-serif;
}
</style>
