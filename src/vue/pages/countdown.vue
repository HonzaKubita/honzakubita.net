<template>
<div>
  <h1 class="google-roboto-1" id="h1"> </h1>
  <noscript>This website requires javascript to work properly please eneable javascript to continue.</noscript>
</div>
</template>

<script>
/*
var countDownDate = new Date("Dec 31, 2021 12:05:00").getTime();
const interval = setInterval(countDown, 1000);

function countDown() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
  let timeleftStr =""

  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  if(minutes < 1 && hours < 1) {
    if(seconds < 31 && seconds > 10) {
        timeleftStr = seconds;
    } else if (seconds < 11 && seconds != 0){
        document.getElementById("h1").classList.remove("vertical-center");
        document.getElementById("h1").classList.replace("google-roboto-1", "google-roboto-2");
        timeleftStr = seconds;
    } else if(seconds == 0) {
        console.log("Here")
        timeleftStr = seconds;
    } else {
        timeleftStr = seconds;
    }
  } else {
      if(hours < 10) {
          hours = "0" + hours
      }

      if(minutes < 10) {
          minutes = "0" + minutes
      }

      if(seconds < 10) {
          seconds = "0" + seconds
      }

      timeleftStr = hours + ":" + minutes + ":" + seconds;
  }

  document.getElementById("h1").innerHTML = timeleftStr;

  if(seconds < 0) {
      document.getElementById("h1").classList.replace("google-roboto-2", "google-roboto-1");
      timeleftStr = "Welcome to 2022";
      document.getElementById("h1").classList.add("vertical-center");
      document.getElementById("h1").innerHTML = timeleftStr;
      clearInterval(interval);
  }
}
*/
export default {
  name: 'mail',
}
</script>
<style>

.google-roboto-1 {
    font-family: 'Roboto', sans-serif;
    font-size: 10rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(0rem);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 12px;
    background-color: white;
    border: none;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
}

.google-roboto-2 {
    font-family: 'Roboto', sans-serif;
    font-size: 20rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(0rem);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 12px;
    background-color: white;
    border: none;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
}
</style>
