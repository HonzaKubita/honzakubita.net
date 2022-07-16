<template>
  <router-view/>
</template>

<script>
console.log("%cYou're not welcome here", 'font-size: 40px; color: red; font-weight: bold;');


export default {
  name: "App",
}

</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: #1b1b1b;
  height: 100%;
  overflow: hidden;
}
img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.main-title {
  color: white;
  margin: 0;
  margin-bottom: 80px;
  font-size: 5em;
  font-family: 'Roboto Mono', sans-serif;
}
.main-subtitle {
  color: white;
  font-size: 2em;
  font-family: 'Roboto Mono', sans-serif;
}
.main-sub-subtitle {
  color: white;
  font-size: 1.2em;
  font-family: 'Roboto Mono', sans-serif;
}
.directory-back {
  cursor: pointer;
  transition: all 0.25s;
}
.directory-back:hover {
  color: gray;
}
.directory-title-container {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 700px) {
  body {
    height: 100%;
    overflow: visible;
  }
}
</style>