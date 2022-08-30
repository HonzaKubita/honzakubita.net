<template>

<div class="pga-main">
  <div class="pga-content">
    <p>Keyword</p>
    <input type="text" v-model="keyword">
    <p>Master Password</p>
    <input type="password" v-model="masterPassword">
    <button @click="generate">Get password</button>
    <p>{{ password }}</p>
    <button v-if="password" @click="copy()">Copy</button>
  </div>
</div>

</template>


<script>
const crypto = require('crypto');

export default {
  name: 'pga',
  data: () => ({
    keyword: "",
    masterPassword: "",
    password: "",
  }),
  methods: {
    generate() {
      let password = crypto.createHash('sha256').update(this.keyword + this.masterPassword).digest('hex');
      password = password.slice(0, 12); // Normal hashes are too big
      password =password.replaceAll('0', '%'); // Special characters
      password =password.replaceAll('a', '=');
      password =password.replaceAll('b', '@');
      password += '&;)'; // Password still may not include enough special characters
      this.password = password;
    },
    copy() {
      navigator.clipboard.writeText(this.password);
    }
  }
}

</script>


<style>

.pga-main {
  width: 100%; height: 100vh;
  display: flex; flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono', sans-serif;
}

.pga-content {
  display: flex; flex-direction: column;
  padding: 30px;

  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 15px 15px black;
}

.pga-content p {
  color: black;
}

.pga-content button, input {
  padding: 3px;
  margin: 5px;
  border: 1px solid black;
  background-color: #f7f7f7;
  border-radius: 5px;

  transition: all 0.25s;
}

.pga-content button:hover {
  background-color: gray;
}
</style>