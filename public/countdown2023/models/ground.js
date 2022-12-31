import * as THREE from '../lib/three.module.js';
import * as OIMO from '../lib/oimo.module.js';

import render from '../modules/render.js';
import physics from '../modules/physics.js';

export default class Ground {
  three = {};
  oimo = {};

  hasPhysics = false;
  render = false;

  constructor(x, y, z, rotation, size, render=false) {
    this.render = render;
    this.size = size;
    this.position = {x: x, y: y, z: z};
    this.rotation = rotation;

    this.addPhysics();
    if (render) this.createRenderObject(x, y, z);
  }

  createRenderObject() {
    this.three.geometry = new THREE.BoxGeometry(1,1,1);
    this.three.material = new THREE.MeshStandardMaterial( {color: 0x336d9c} );

    this.three.mesh = new THREE.Mesh(this.three.geometry, this.three.material);

    this.three.mesh.scale.set(this.size[0], this.size[1], this.size[2]);
    this.three.mesh.position.set(this.position.x, this.position.y, this.position.z);
    this.three.mesh.quaternion.copy(this.oimo.body.getQuaternion());

    //this.three.mesh.material.opacity = 0.5;
    //this.three.mesh.material.transparent = true;

    this.three.mesh.castShadow = true; //default is false
    this.three.mesh.receiveShadow = true; //default

    render.scene.add(this.three.mesh);
  }

  addPhysics() {
    this.oimo.body = physics.world.add({ 
      size: this.size, // size of shape
      pos: [this.position.x, this.position.y, this.position.z], // start position in degree
      rot: this.rotation, // start rotation in degree
      move: false, // dynamic or statique // We don't want for objects to move when they are added to the simulation
    });

    this.hasPhysics = true;
  }
}