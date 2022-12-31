import * as THREE from '../lib/three.module.js';
import { OrbitControls } from '../lib/orbitControls.module.js';

import physics from './physics.js';

// Var

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );;
let renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );

const loader = new THREE.TextureLoader();

// function addGround(phys_ground) {
//   // const ground_geometry = new THREE.BoxGeometry(1,1,1);
//   // const geometry_wireframe = new THREE.WireframeGeometry( ground_geometry );

//   // const ground = new THREE.LineSegments( geometry_wireframe );
   
//   // ground.scale.set(scale[0], scale[1], scale[2]);
//   // ground.position.set(position[0], position[1], position[2]);
//   // ground.rotation.set(rotation[0]*ToRad, rotation[1]*ToRad, rotation[2]*ToRad);

//   // ground.receiveShadow = true;

//   // scene.add(ground);

//   const ground_geometry = new THREE.BoxGeometry(1,1,1);
//   const ground_material = new THREE.MeshStandardMaterial( { color: 0x00ffff } );

//   let ground = new THREE.Mesh(ground_geometry, ground_material);

//   ground.scale.set(phys_ground.size[0], phys_ground.size[1], phys_ground.size[2]);
//   ground.position.set(phys_ground.pos[0], phys_ground.pos[1], phys_ground.pos[2]);
//   ground.quaternion.copy(phys_ground.phys.getQuaternion());

//   console.log(`Scale: ${phys_ground.size}, Position: ${phys_ground.pos}, Quaternion: ${phys_ground.phys.getQuaternion()}`)

//   //sphere.material.depthTest = false;
//   ground.material.opacity = 0.5;
//   ground.material.transparent = true;

//   ground.castShadow = true; //default is false
//   ground.receiveShadow = true; //default 

//   scene.add(ground);

// }


function init() {

  scene.background = new THREE.Color( 0x1e1e1e );

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
  
  addEventListener("resize", (event) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );
  });
  
  document.body.appendChild( renderer.domElement );

  camera.position.x = 400;
  camera.position.y = -100;
  camera.position.z = 400;


  // Visualise ground

  // physics.grounds.forEach(ground => {
  //   addGround(ground);
  // });

  // Lights

  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  const pointLight = new THREE.PointLight( 0xffffff, 10, 1000 );
  pointLight.position.set( 800, 200, 200 );
  
  pointLight.castShadow = true; // default false
  scene.add( pointLight );

  // DEV

  //const axesHelper = new THREE.AxesHelper( 5 ); scene.add( axesHelper );
  //controls.update();
  // const shadow_helper = new THREE.CameraHelper( pointLight.shadow.camera );
  // scene.add( shadow_helper );

}

function update() {

  // let objects = scene.children.filter(child => child.isMesh && child.geometry.type == "SphereGeometry");

  // for (let i = 0; i < objects.length; i++) {
  //   objects[i].material.color = new THREE.Color(`hsl(${hue + i * 5}, 100%, 50%)`);
  // }

  // hue += 1;
  // if (hue >= 360) hue = 0;
  
  renderer.render(scene, camera);
}


// Aditional functions

// function createObject(x, y, z) {
//   const geometry = new THREE.SphereGeometry( 10, 10, 10 );
//   const material = new THREE.MeshBasicMaterial( { map: loader.load("textures/marble.png") } );
//   //let geometry_wireframe = new THREE.WireframeGeometry( geometry );
//   //let sphere = new THREE.LineSegments( geometry_wireframe );

//   let sphere = new THREE.Mesh(geometry, material);

//   //sphere.material.color.setHex( 0xffffff );
//   //sphere.material.depthTest = false;
//   //sphere.material.opacity = 0.5;
//   //sphere.material.transparent = true;

//   sphere.position.x = x;
//   sphere.position.y = y;
//   sphere.position.z = z;

//   sphere.castShadow = true; //default is false
//   sphere.receiveShadow = true; //default 

//   scene.add(sphere);

//   return sphere;
// }

export default {
  init,
  update,
  //createObject,
  scene,
  camera,
  renderer
}