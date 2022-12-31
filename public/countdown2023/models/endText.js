import { FontLoader } from '../lib/fontLoader.module.js';
import { TextGeometry } from '../lib/textGeometry.module.js';
import * as THREE from '../lib/three.module.js';

import render from '../modules/render.js';

const loader = new FontLoader();

export default class EndText {

  show = false;

  constructor(x, y, z) {
    this.position = {x: x, y: y, z: z};

    this.createMesh(this.position);
  }

  createMesh(position) {

    loader.load("fonts/optimer.typeface.json", function ( font ) {
      const geometry = new TextGeometry( 'Welcome to 2023!', {
        font: font,
        size: 80,
        height: 10,
        curveSegments: 5,
        bevelEnabled: false,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const geometryWireframe = new THREE.WireframeGeometry( geometry );
      const mesh = new THREE.LineSegments( geometryWireframe );

      mesh.material.color.setHex( 0xffffff );
      mesh.material.depthTest = false;
      mesh.material.opacity = 0.5;
      mesh.material.transparent = true;

      mesh.position.x = position.x;
      mesh.position.y = position.y;
      mesh.position.z = position.z;

      mesh.name = "endText";

      render.scene.add(mesh);
    });
  }

  getMesh() {
    return render.scene.getObjectByName("endText");
  }

  update() {
    const mesh = this.getMesh()

    if (!mesh) return;

    if (this.show && mesh.position.y > 0) {
      mesh.position.y -= 1;
    }
  }
}