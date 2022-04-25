<template>
<div class="labs-winXp-main">
  <canvas id="labsWinXP" class="labs-winXP" width="1111" height="693"></canvas>
</div>
</template>

<script>

export default {
  name: 'winXP',
  mounted() {

    let canvas = document.getElementById("labsWinXP");
    let c = canvas.getContext("2d");
    startGame(canvas, c);
  }
}

addEventListener('fullscreenchange', event => {
  if (document.fullscreenElement) {
  } else {
    location.reload()
  }
});

let loggedIn = false;

let error1IMG = new Image();
error1IMG.src = "/images/labs/winXP/err1.png";

let error2IMG = new Image();
error2IMG.src = "/images/labs/winXP/err2.png";

let error3IMG = new Image();
error3IMG.src = "/images/labs/winXP/err3.png";

let error4IMG = new Image();
error4IMG.src = "/images/labs/winXP/err4.png";

let bootSound = new Audio('/images/labs/winXP/boot.mp3');
let loginSound = new Audio('/images/labs/winXP/login.mp3');
let errorSound = new Audio('/images/labs/winXP/error.mp3');
let errorSound2 = new Audio('/images/labs/winXP/error2.mp3');


function startGame(canvas, c) {

  let bootIMG = new Image();
  bootIMG.src = "/images/labs/winXP/boot.jpg";
  let desktopIMG = new Image();
  desktopIMG.src = "/images/labs/winXP/desktop.png";

  let startBtnIMG = new Image();
  startBtnIMG.src = "/images/labs/winXP/startBtn.png";

  bootIMG.onload = function() {
  }

  startBtnIMG.onload = function() {
    c.drawImage(bootIMG, 0, 0);
    c.drawImage(startBtnIMG, 480, 450);
    bootSound.play();
  }

  canvas.addEventListener("mousedown", (event) => {
    if (loggedIn) {
      generateError(canvas, c, event);
    } else {
      loggedIn = true;
      loginSound.play();
      fullScreen(canvas);
      c.drawImage(desktopIMG, 0, 0);
    }
  });
}

function generateError(canvas, c, e) {
  let errorPosition = getRandomPosition(canvas);
  let error = Math.floor(Math.random() * 4) + 1;
  errorSound.pause();
  errorSound.currentTime = 0;
  errorSound2.pause();
  errorSound2.currentTime = 0;
  switch (error) {
    case 1:
      c.drawImage(error1IMG, errorPosition.x, errorPosition.y);
      errorSound.play();
      break;
    case 2:
      c.drawImage(error2IMG, errorPosition.x, errorPosition.y);
      errorSound2.play();
      break;
    case 3:
      c.drawImage(error3IMG, errorPosition.x, errorPosition.y);
      errorSound.play();
      break;
    case 4:
      c.drawImage(error4IMG, errorPosition.x, errorPosition.y);
      errorSound2.play();
      break;
  }

}


function getRandomPosition(canvas) {
  let x = Math.floor(Math.random() * canvas.width) - 100;
  let y = Math.floor(Math.random() * canvas.height) - 50;
  return {
    x: x,
    y: y
  }
}


function fullScreen(element) {
  element.requestFullscreen()
  .then(function() {
    
  })
  .catch(function(error) {
    // raise allert
  });
}


</script>

<style>
.labs-winXP {
  width: 100vw;
  height: 100vh;
}
</style>
