import * as THREE from '../lib/three.module.js';
import * as OIMO from '../lib/oimo.module.js';

import render from '../modules/render.js';
import physics from '../modules/physics.js';

export default class Ball {
  three = {};
  oimo = {};

  hasPhysics = false;

  constructor(x, y, z, size=10) {
    this.size = size;
    this.position = {x: x, y: y, z: z};
    this.createRenderObject(x, y, z);
  }

  createRenderObject() {
    this.three.geometry = new THREE.SphereGeometry( this.size, 10, 10 );
    this.three.material = new THREE.MeshStandardMaterial( { color: 0x00ffff } );
    this.three.geometryWireframe = new THREE.WireframeGeometry( this.three.geometry );
    this.three.mesh = new THREE.LineSegments( this.three.geometryWireframe );

    this.three.mesh.material.color.setHex( 0xffffff );
    this.three.mesh.material.depthTest = false;
    this.three.mesh.material.opacity = 0.5;
    this.three.mesh.material.transparent = true;

    this.three.mesh.position.x = this.position.x;
    this.three.mesh.position.y = this.position.y;
    this.three.mesh.position.z = this.position.z;

    this.three.mesh.castShadow = true; //default is false
    this.three.mesh.receiveShadow = true; //default

    render.scene.add(this.three.mesh);
  }

  addPhysics() {
    this.oimo.body = physics.world.add({ 
      type: 'sphere', // type of shape : sphere, box, cylinder 
      size: [this.size, this.size, this.size], // size of shape
      pos: [this.position.x, this.position.y, this.position.z], // start position in degree
      rot: [0, 0, 0], // start rotation in degree
      move: true, // dynamic or statique // We don't want for objects to move when they are added to the simulation
      density: 1,
      friction: 0.2,
      restitution: 0.5,
      belongsTo: 1, // The bits of the collision groups to which the shape belongs.
      collidesWith: 0xffffffff, // The bits of the collision groups with which the shape collides.
      mass: 100,
    });

    this.hasPhysics = true;
  }

  update() {
    if (!this.hasPhysics) return false; // Dont update mode if it doesn't have physiscs

    this.position = this.oimo.body.getPosition();
    this.quaternion = this.oimo.body.getQuaternion();

    this.three.mesh.position.copy(this.position);
    this.three.mesh.quaternion.copy(this.quaternion);

  }

  remove() {
    render.scene.remove(this.three.mesh);
    physics.world.removeRigidBody(this.oimo.body);
  }
}