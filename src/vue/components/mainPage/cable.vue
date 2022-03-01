<template>
<div class="cable-container" @click="connectCable">
  <p class="socket-label">{{ label }}</p>
  <img class="socket" src="images/socket.png">
  <img :class="state" src="images/rj45.png">
  <img class="cable" src="images/cable.png">
  <img class="cable" src="images/cable.png">
  <img class="cable" src="images/cable.png">
  <img class="cable" src="images/cable.png">
</div>
</template>

<script>
const delay = ms => new Promise(res => setTimeout(res, ms));
const changePage = async (newPage, router) => {
  await delay(500);
  router.push(newPage);
};

export default {
  name: 'calbe',
  data: () => ({
    state: "disconnected"
  }),
  props: {
    label: String,
    redirect: String
  },
  methods: {
    connectCable() {
      if(this.state == "connected") {
        this.state = "disconnected";
      } else {
        this.state = "connected";
        changePage(this.redirect, this.$router);
      }
    }
  }
}
</script>

<style>
.socket-label {
  transform: translateY(+100px);
}
.cable-container {
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Roboto Mono', sans-serif;
}
.socket {
  z-index: 3;
}
.disconnected {
  z-index: 2;
  transition: all 0.25s;
}
.disconnected:hover {
  cursor: pointer;
  transform: translateY(-30px);
}
.connected {
  z-index: 2;
  transition: all 0.25s;
  transform: translateY(-155px);
}
.cable {
  z-index: 1;
  transform: translateY(-160px);
}
</style>
