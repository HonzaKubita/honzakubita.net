<template>
<div class="main-mobile-cable-container">
  <div class="mobile-cable-container" @click="connectCable">
    <img class="mobile-socket mobile-menu-img" src="images/socket.png">
    <img :class="state" class="mobile-menu-img" src="images/rj45.png">
    <img class="mobile-cable mobile-menu-img" src="images/cable.png">
    <img class="mobile-cable mobile-menu-img" src="images/cable.png">
    <img class="mobile-cable mobile-menu-img" src="images/cable.png">
  </div>
  <p class="mobile-socket-label main-subtitle">{{ label }}</p>
</div>

</template>

<script>
const delay = ms => new Promise(res => setTimeout(res, ms));
const changePage = async (newPage, router) => {
  await delay(500);
  router.push(newPage);
};

export default {
  name: 'mobileCable',
  data: () => ({
    state: "mobile-disconnected"
  }),
  props: {
    label: String,
    redirect: String
  },
  methods: {
    connectCable() {
      if(this.state == "mobile-connected") {
        this.state = "mobile-disconnected";
      } else {
        this.state = "mobile-connected";
        changePage(this.redirect, this.$router);
      }
    }
  }
}
</script>

<style>
.main-mobile-cable-container {
  height: 200px;
  width: 100vw;
  overflow: hidden;
}
.mobile-menu-img {
  width: 200px;
  transform: rotate(-90deg) translateY(+180px);
}
.mobile-socket-label {
  transform: translateY(-200px);
}
.mobile-cable-container {
  display: flex;
  flex-direction: row;
}
.mobile-disconnected {
  z-index: 2;
  transition: all 0.25s;
  transform: rotate(-90deg);
}
.mobile-connected {
  z-index: 2;
  transition: all 0.25s;
  transform: rotate(-90deg) translateY(-170px);
}
.mobile-cable {
  z-index: 1;
  transform: translateX(-170px) rotate(-90deg);
}
.mobile-socket {
  z-index: 3;
  transform: translateX(-50px) rotate(-90deg);
}
</style>
