<template>
  <div :class="{'soap-menu': !game}" class="soap-main" id="soapMain">
    <button v-if="!game" @click="runGame">Play</button>
    <div v-else id="game">
      <!-- <p id="rawData" style="z-index: 999; position: absolute;">rawData</p> -->
      <img src="/images/labs/soap/soap.png" class="soap" id="soap">
    </div>
  </div>
</template>

<style>

.soap-menu  {
  display: flex;
  justify-content: center;
  align-items: center;
}

.soap-main {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(../../../../public/images/labs/soap/floor.jpg);
  background-size: 500px;
}

.soap-main button {
  font-size: 50px;
  width: 200px;
  height: 100px;
}

.soap {
  position: absolute;
  width: 200px;
}

</style>


<script>

let soap = {
  el: document.getElementById('soap'),
  position: {
    x: 0,
    y: 0
  },
  update() {
    this.el.style.left = this.position.x + 'px';
    this.el.style.top = this.position.y + 'px';
  }
}

const friction = 0.5

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  console.log(`absolute: ${absolute} alpha: ${alpha} beta: ${beta} gamma: ${gamma}`)
}

function runSoap() {
  console.log("running soap...");
  addEventListener("deviceorientation", handleOrientation, true);
}

function fullScreen(element) {
  element.requestFullscreen()
  .then(function() {
    
  })
  .catch(function(error) {
    // raise allert
  });
}

export default {
  name: 'soap',
  data: () => ({
    game: false
  }),
  methods: {
    runGame() {
      let el = document.getElementById('soapMain');
      fullScreen(el);
      this.game = true;
      runSoap()
    }
  },
}

</script>