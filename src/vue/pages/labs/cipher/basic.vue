<template>

<div class="basic-main">

  <div>
    <h1>Input</h1>
    <textarea v-model="input"></textarea>
  </div>

  <div>
    <input v-model="mode" type="radio" value="encrypt">
    <label for="encrypt">Encrypt</label>

    <input v-model="mode" type="radio" value="decrypt">
    <label for="decrypt">Decrypt</label>

    <button @click="convert">Convert</button>
  </div>

  <div>
    <h1>Output</h1>
    <textarea v-model="output"></textarea>
  </div>

</div>

</template>


<script>
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function isNum(val) {
    return /^-?\d+$/.test(val);
}

function encrypt(text) {
  text = text.toLowerCase();
  let output = [];
  text.split('').forEach(symbol => {
    if (letters.includes(symbol)) {
      output.push(letters.indexOf(symbol) + 1);
    } else {
      output.push(symbol);
    }
  })
  return output.toString();
}

function decrypt(text) {
  let output = [];
  text.split(',').forEach(number => {
    if (!isNum(number)) {
      output.push(number);
    } else {
      output.push(letters[number - 1]);
    }
  })
  return output.toString().replaceAll(',', '');
}

export default {
  name: 'cipher_basic',
  data: () => ({
    mode: '',
    input: '',
    output: '',
  }),
  methods: {
    convert() {
      if (this.mode == 'encrypt') {
        this.output = encrypt(this.input);
      } else {
        this.output = decrypt(this.input);
      }
    }
  }
}

</script>


<style>

.basic-main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.basic-main div {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.basic-main textarea {
  width: 200px;
  height: 200px;
}

</style>