<template>
<div>
  <div class="floppy-disk" @click="redirect">
    <p class="floppy-disk-label"><slot></slot></p>
    <img :src="imgsrc" class="floppy-disk-img">
  </div>
</div>
</template>

<script>

export default {
  name: 'floppyDisk',
  props: {
    diskLabel: String,
    color: String,
    link: String
  },
  computed: {
    imgsrc() {
      return "images/floppy_disk_" + this.color + ".png";
    }
  },
  methods: {
    redirect() {
      window.open(this.link, "_blank").focus();
    }
  }
}
</script>

<style>
.floppy-disk {
  margin: 10px;
  width: 250px;
  cursor: pointer;
  transition: all 0.25s;
}
.floppy-disk:hover {
  transform: translateY(-30px) rotate(3deg);
}
.floppy-disk:active {
  transform: translateY(+10px);
}
.floppy-disk-img {
  width: 250px;
}
.floppy-disk-label {
  text-align: center;
  font-family: 'Roboto Mono', sans-serif;
  transform: translateY(+210px);
}
@media screen and (max-width: 700px) {
  .floppy-disk:hover {
    transform: translateY(0px);
  }
  .floppy-disk:active {
    transform: translateY(0px);
  } 
}
</style>