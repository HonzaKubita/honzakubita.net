import * as OIMO from '../lib/oimo.module.js';

// Var
let world = new OIMO.World({ 
  timestep: 1/60, 
  iterations: 8, 
  broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
  worldscale: 1, // scale full world 
  random: true,  // randomize sample
  info: false,   // calculate statistic or not
  gravity: [0,-500,0] 
});


function init() {
}

function update() {  
  world.step();
}


export default {
  init,
  update,
  world,
}