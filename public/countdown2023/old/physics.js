import * as OIMO from '../lib/oimo.module.js';

// Var
let world = new OIMO.World({ 
  timestep: 1/60, 
  iterations: 8, 
  broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
  worldscale: 1, // scale full world 
  random: true,  // randomize sample
  info: false,   // calculate statistic or not
  gravity: [0,-200,0] 
});

const grounds = [
  {
    size: [800, 800, 800],
    pos: [-100, -500, 100],
    rot: [20, 0, 50],
    move: false,
  },
  {
    size: [800, 800, 800],
    pos: [900, -500, 100],
    rot: [20, 0, -50],
    move: false,
  }
]


function init() {
  // Create invisible objects to guide falling spheres

  grounds.forEach(ground => {
    ground.phys = world.add(ground);
  })
}

function update() {  
  world.step();
}

// Aditional functions

function createObject(x, y, z) {
  let object = world.add({ 
    type:'sphere', // type of shape : sphere, box, cylinder 
    size:[10,10,10], // size of shape
    pos:[x,y,z], // start position in degree
    rot:[0,0,90], // start rotation in degree
    move:false, // dynamic or statique // We don't want for objects to move when they are added to the simulation
    density: 1,
    friction: 0.2,
    restitution: 0.5,
    belongsTo: 1, // The bits of the collision groups to which the shape belongs.
    collidesWith: 0xffffffff, // The bits of the collision groups with which the shape collides.
    mass: 100,
  });

  return object;
}

export default {
  init,
  update,
  createObject,
  world,
  grounds
}