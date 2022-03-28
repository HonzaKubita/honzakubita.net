<template>
<div class="randomenator-main">
  <h1 class="main-title">JS random generator</h1>
  <div>
    <div>
      <h2 class="main-subtitle">Input:</h2>
      <h3 class="main-sub-subtitle">Min value: <input class="randomenator-input" v-model="randomMin" type="number"></h3>
      <h3 class="main-sub-subtitle">Max value: <input class="randomenator-input" v-model="randomMax" type="number"></h3>
      <h3 class="main-sub-subtitle">Integer: <input class="randomenator-input" v-model="integer" type="checkbox"></h3>
      <button class="randomenator-button" @click="generate">Generate</button>
    </div>
    <div>
      <h2 class="main-subtitle">Output:</h2>
      <p class="randomenator-output">{{ output }}</p>
      <button class="randomenator-button" @click="copy">Copy</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'JSRandomenator',
  data: () => ({
    randomMax: 0,
    randomMin: 0,
    integer: false,
    output: "example output example output example output example output"
  }),
  computed: {
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    generate() {
      if(this.integer) {
        console.log(Math.floor(Math.random() * (this.randomMax - this.randomMin + 1)) + this.randomMin);
        this.output = `Math.floor(Math.random() * (${this.randomMax} - ${this.randomMin} + 1)) + ${this.randomMin};`
      } else {
        console.log(Math.random() * (this.randomMax - this.randomMin) + this.randomMin);
        this.output = `Math.random() * (${this.randomMax} - ${this.randomMin}) + ${this.randomMin};`;
      }
    },
    copy() {
      navigator.clipboard.writeText(this.output);
    }
  }
}
</script>

<style>
.randomenator-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.randomenator-output {
  width: 400px;
  height: fit-content;
	font-family: Consolas,monaco,monospace;
  background: #424242;
  border: 2px solid #181818;
  border-radius: 10px;
  padding: 4px; 
}
.randomenator-button {
  font-family: Consolas,monaco,monospace;
  font-size: 20px;
  color: white;
  background: #12d400;
  padding: 4px;
  border: none;
  border-radius: 5px;
  transition: all 0.1s;
}
.randomenator-button:active {
  transform: translateY(3px);
}
.randomenator-input {
  font-family: Consolas,monaco,monospace;
  color: white;
  background: #424242;
  border: none;
  padding: 4px;
}
@media screen and (max-width: 430px) {
  .randomenator-output {
    width: 100%;
  }
}
</style>
