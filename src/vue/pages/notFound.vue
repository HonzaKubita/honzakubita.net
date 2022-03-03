<template>
<div class="mainDiv">
    <h1>404 Page not found!</h1>
    <button @click="gotoMainPage">Home</button>
</div>
</template>

<script>

export default {
  name: 'notFound',
  methods: {
    gotoMainPage() {
        window.location.replace('/');
    }
  }
}
</script>

<style scoped>
h1 {
    color: white;
    font-family: 'Roboto Mono', sans-serif;
}
.mainDiv {
    background: #1b1b1b; /* fallback for old browsers */
    background: linear-gradient(-45deg, #1b1b1b, #282828, #1b1b1b, #282828);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}
button {
    background-color: 4CAF50;
    padding: 10px;
    font-family: 'Roboto Mono', sans-serif;
}
</style>
