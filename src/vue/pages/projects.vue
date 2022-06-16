<template>
<div class="projects-main-div">
  <div class="directory-title-container">
    <h1 @click="back" class="main-title directory-back">/usr/webpage</h1>
    <h1 class="main-title">/projects</h1>
  </div>
  <div class="disk-main-container">
    <floppyDisk v-for="data in projectsData" :color="data.color" :link="data.link">{{ data.title }}</floppyDisk>
  </div>
</div>
</template>

<script>
import floppyDisk from '../components/floppyDisk.vue'
import porjectsData from '../../data/projects.json'

export default {
  name: 'projects',
  data: () => ({
    projectsData: porjectsData
  }),
  components: {
    floppyDisk
  },
  methods: {
    back() {
      this.$router.push('/');
    }
  },
}
</script>

<style>
.projects-main-div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.disk-main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  overflow-y: scroll;
}

@media screen and (max-width: 700px) {
  .disk-main-container {
    max-height: 100%;
  }
}
</style>
