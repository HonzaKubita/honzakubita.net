<template>

<div class="basic-main">

  <textarea v-model="input"></textarea>

  <div>
    <input v-model="mode" type="radio" value="encrypt">
    <label for="encrypt">Encrypt</label>

    <input v-model="mode" type="radio" value="decrypt">
    <label for="decrypt">Decrypt</label>

    <button @click="convert">Convert</button>
  </div>

  <textarea v-model="output" disabled></textarea>

</div>

</template>


<script>
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function encrypt(text) {
  let output = '';
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
  let output = '';
  text.split(',').forEach(number => {
    try {
      output.push(letters[number]);
    } catch {
      output.push(number);
    }
  })
  return output.toString().replace(',', '');
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>