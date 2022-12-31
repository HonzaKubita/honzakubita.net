import countdown from './modules/countdown.js';

import render from './modules/render.js';
import physics from './modules/physics.js';

// Models

import NumberObject from './models/number.js';
import Ground from './models/ground.js';
import Colon from './models/colon.js';
import EndText from './models/endText.js';

// Init

physics.init();
console.log("Physics init done.");

render.init();
console.log("Render init done.");

// Var

let running = true;
let goalReached = false;
let objects = [];
let prevUpdateTime = countdown.getRemainingTime();

let currNumbers = [
  new NumberObject(0, 20, 0, 0),
  new NumberObject(120, 20, 0, 0),

  new NumberObject(300, 20, 0, 0),
  new NumberObject(420, 20, 0, 0),

  new NumberObject(600, 20, 0, 0),
  new NumberObject(720, 20, 0, 0)
]

let endText = new EndText(-55, 500, 100);

// Create ground

let grounds = [
  new Ground(-100, 100, -500, [10, 0, 60], [10, 1200, 2000], false),
  new Ground(900, 100, -500, [10, 0, -60], [10, 1200, 2000], false)
]

async function dropAndSpawn(index, newNumber) {
  currNumbers[index].addPhysics();

  let position = currNumbers[index].position;
  objects.push(currNumbers[index]);

  setTimeout(() => {
    currNumbers[index] = new NumberObject(position.x, position.y, 0, newNumber);
  }, 900);
}

function updateTime() {
  let currTime = countdown.getRemainingTime();

  if (currTime.done) {
    goalReached = true;
    endText.show = true;

    objects.forEach(object => {
      object.addPhysics();
    });

    return;
  }

  let elapsedTime =  
    (prevUpdateTime.seconds - currTime.seconds) +
    ((prevUpdateTime.minutes - currTime.minutes) * 60) +
    ((prevUpdateTime.hours - currTime.hours) * 60 * 60); // Calcualte time elapsed from last update in seconds

  if (elapsedTime < 1) return false; // We cannot display less than one second

  let currTimeString = ('0'  + currTime.hours).slice(-2) + ':' + ('0' + currTime.minutes).slice(-2) + ':' + ('0' + currTime.seconds).slice(-2);
  currTimeString = currTimeString.replaceAll(":", "");

  let currTimeNumbers = [...currTimeString.split("")];

  for (let i = 0; i < currTimeNumbers.length; i++) {
    if (Number(currTimeNumbers[i]) != currNumbers[i].number) { // There is a difference
      dropAndSpawn(i, Number(currTimeNumbers[i]));
    }
  }

  prevUpdateTime = currTime;
}

let colons = [
  new Colon(200, 20, 0),
  new Colon(500, 20, 0)
]


objects = [...currNumbers, ...colons];


// Update loop

function loop() {
  
  physics.update();

  objects.forEach(object => {

    object.update();

  })

  endText.update();

  render.update();

  if (!goalReached) updateTime();

  if (running) requestAnimationFrame(loop);
};

loop();