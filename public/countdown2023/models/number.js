import getNumberObjects from '../modules/numbers.js';

import Ball from './ball.js';

export default class NumberObject {

  objects = [];

  constructor(x, y, z, number, id="") {
    this.position = {x: x, y: y, z: z};
    this.number = number;
    this.id = id;

    this.objectsPositions = getNumberObjects(this.number);

    this.createObjects();
  }

  createObjects() {
    this.objectsPositions.forEach(object => {
      let newObject = new Ball(object.x * 25 + this.position.x, object.y *25 + this.position.y, 0);
      this.objects.push(newObject);
    });
  }

  addPhysics() {

    for (let i = 0; i < this.objects.length; i++) {
      setTimeout(() => {
        this.objects[i].addPhysics();
      }, 20 * (this.objects.length - i))
    }

    // this.objects.forEach(object => {
    //   object.addPhysics();
    // })

    this.hasPhysics = true;
  }

  update() {

    this.objects.forEach(object => {
      object.update();

      if (object.position.y < -500) object.remove();

    })
  }
}