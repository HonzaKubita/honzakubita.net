<template>
<div class="telephone-container">
  <img src="images/telephone_handle.png" class="phone-handle">
  <img src="images/telephone_body.png" class="phone-body">
  <p class="telephone-subtitle">Phone</p>
  <p class="telephone-phonenumber">732 754 149</p>
</div>
</template>

<script>

export default {
  name: 'phone',
}
</script>

<style>
.telephone-container {
  display: flex;
  flex-direction: column;
  margin: 50px;
  text-align: center;
  cursor: pointer;
}
.phone-body {
  z-index: 1;
  width: 150px;
  transform: translateY(-150px);
}
.phone-handle {
  z-index: 2;
  width: 150px;
  transition: all 0.25s;
}
.phone-handle:hover {
  transform: translateY(-30px) rotate(5deg);
}
.telephone-subtitle {
  color: white;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 2em;
  transform: translateY(-150px);
}
.telephone-phonenumber {
  color: white;
  font-size: 1em;
  font-family: 'Roboto Mono', sans-serif;
  transform: translateY(-162px);
}
</style>
