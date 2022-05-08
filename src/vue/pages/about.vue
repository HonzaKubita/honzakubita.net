<template>
<div class="about-main-div">
  <div class="directory-title-container">
    <h1 @click="back" class="main-title directory-back">/usr/webpage</h1>
    <h1 class="main-title">about</h1>
  </div>
  <div class="about-subtitle-container">
    <p class="about-subtitle">{{ aboutText }}</p>
  </div>
</div>
</template>

<script>

function calculateAge(yr, mo, dy) {
  let dob = new Date(yr, mo - 1, dy);
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms); 
  
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default {
  name: 'about',
  components: {
  },
  computed: {
    aboutText() {
      let age = calculateAge(2006, 4, 11);
      return "Hi my name is Honza and I'm " + age + " years old. (<- Automatically calculated. I could be dead by now). I've been interested in programming since I was about 7-8 years old, but of course back then I didn't know anything about actual programming. I was building things with lego mindstorms, but after some time it just wasn't enough, so I started learning more complicated things. I started learning BATCH in which I created my first game that let you play rock, paper scissors, against your own pc. Now my favorite programming languages are Python and JS, and I'm focused on front-end development (vue.js).";
    }
  },
  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.about-main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.about-subtitle {
  color: white;
  font-size: 1em;
  font-family: 'Roboto Mono', sans-serif;
}
.about-subtitle-container {
  width: 50%;
}
@media screen and (max-width: 700px) {
  .about-subtitle-container {
    width: 90%;
  }
}
</style>
