<template>
<div class="contact-main-div">
  <div class="directory-title-container">
    <h1 @click="back" class="main-title directory-back">C:\webpage</h1>
    <h1 class="main-title">\contact</h1>
    <!-- Ok you want it, i'll let you have it. Here have this 'Super' 'Secret' button -->
    <!-- <button onclick="location.replace('/supersecretlocationonmywebsite')">Super Secret Button</button> -->
  </div>
  <div class="contact-components-container">
    <github/>
    <mail/>
    <telephone/>
  </div>
</div>
</template>

<script>
import telephone from '../components/contact/telephone.vue'
import mail from '../components/contact/mail.vue'
import github from '../components/contact/github.vue'

export default {
  name: 'contact',
  components: {
    github,
    telephone,
    mail,
  },
  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
.contact-main-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contact-components-container {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 800px) {
  .contact-components-container {
    flex-direction: column;
  }
  .directory-title-container {
    flex-direction: column;
  }
}
</style>