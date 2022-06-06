<template>
<div class="mail-container" @click="mailMe">
  <img class="postcard" src="images/postcard.png">
  <p class="mail-subtitle">Mail</p>
  <p class="mail-mailtext">honza.kubita@gmail.com</p>
</div>
</template>

<script>

export default {
  name: 'mail',
  methods: {
    mailMe() {
      window.location.href = "mailto:honza.kubita@gmail.com";
    }
  }
}
</script>

<style>
.mail-container {
  display: flex;
  flex-direction: column;
  margin: 50px;
  text-align: center;
  align-items: center;
  cursor: pointer;
}
.mail-subtitle {
  color: white;
  font-size: 2em;
  font-family: 'Roboto Mono', sans-serif;
}
.postcard {
  width: 150px;
  transition: all 1s;
}
.postcard:hover {
  transform: rotate(360deg);
}
.mail-mailtext {
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-family: 'Roboto Mono', sans-serif;
}
</style>
