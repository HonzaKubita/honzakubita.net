import Ball from './ball.js';

export default class ColonObject {

  objects = [];

  constructor(x, y, z, id="") {
    this.position = {x, y, z};
    this.id = id;

    this.objectsPositions = [{x: 2, y: 3},{x: 2, y: 1},];

    this.createObjects();
  }

  createObjects() {
    this.objectsPositions.forEach(object => {
      let newObject = new Ball(object.x * 25 + this.position.x, object.y *25 + this.position.y, 0);
      this.objects.push(newObject);
    });
  }

  addPhysics() {
    this.objects.forEach(object => {
      object.addPhysics();
    })
  }

  update() {
    this.objects.forEach(object => {
      object.update();
    })
  }
}