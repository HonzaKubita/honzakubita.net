<template>
<div class="main-div">
  <div id="mainTextDiv" class="main-text-div">
    <h1 class="main-title">C:\webpage</h1>
  </div>
  <div class="cable-div">
    <cables/>
  </div>
  <div class="mobile-menu">
    <mobileCables/>
  </div>
</div>
</template>

<script>
import cables from '../components/mainPage/cables.vue'
import mobileCables from '../components/mainPage/mobileCables.vue'

export default {
  name: 'mainPage',
  components: {
    cables,
    mobileCables
  },
  methods: {
    mobileMenuVisibleToggle() {
      document.getElementById("mobileMenuSelection").classList.toggle("mobile-menu-content-visible");
    },
    changePage(newPage) {
      this.$router.push(newPage);
    }
  },
}
</script>

<style>
.main-div {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}
.mobile-menu-subtitle {
  font-size: 2em;
  font-family: 'Roboto Mono', sans-serif;
  background: gray;
  color: white;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.25s;
}
.mobile-menu-subtitle:active {
  transform: translateY(+10px);
}
.mobile-menu {
  display: none;
}
@media screen and (max-width: 700px) {
  .cable-div {
    display: none;
  }
  .main-div {
    font-size: 0.8em;
  }
  .mobile-menu {
    display: block;
  }
  .main-title {
    font-size: 50px;
    margin-bottom: 1rem;
  }
}

.mobile-menu-content {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  background: rgb(61, 61, 61);
  padding: 10px;
  border-radius: 10px;
}
.mobile-menu-content-visible {
  max-height: 500px;
  transition: max-height 0.8s ease-in;
}
</style>