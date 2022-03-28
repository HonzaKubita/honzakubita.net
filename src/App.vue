<template>
  <router-view/>
</template>

<style>
body {
  background: #1b1b1b;
  height: 100%;
  overflow: hidden;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.main-title {
  color: white;
  margin: 0;
  margin-bottom: 80px;
  font-size: 5em;
  font-family: 'Roboto Mono', sans-serif;
}
.main-subtitle {
  color: white;
  font-size: 2em;
  font-family: 'Roboto Mono', sans-serif;
}
.main-sub-subtitle {
  color: white;
  font-size: 1.2em;
  font-family: 'Roboto Mono', sans-serif;
}
.directory-back {
  cursor: pointer;
  transition: all 0.25s;
}
.directory-back:hover {
  color: gray;
}
.directory-title-container {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 700px) {
  body {
    height: 100%;
    overflow: "visible";
  }
}
</style>