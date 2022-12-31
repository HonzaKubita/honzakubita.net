import * as THREE from '../lib/three.module.js';
import { OrbitControls } from '../lib/orbitControls.module.js';

// Var

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );;
let renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );

const loader = new THREE.TextureLoader();

let textures = {};

function init() {

  scene.background = new THREE.Color( 0x010c1f );

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
  camera.position.y = 0;
  camera.position.z = 500;

  // Lights

  const light = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
  light.position.set(400, 0, 500); // Same positon as camera
  scene.add( light );

  const pointLight = new THREE.PointLight( 0xfbffc2, 10, 500 );
  pointLight.position.set( 200, 200, -100 );
  pointLight.castShadow = true; // default false
  scene.add( pointLight );

  const pointLight2 = new THREE.PointLight( 0xfbffc2, 10, 800 );
  pointLight2.position.set( 500, -50, 500 );
  pointLight2.castShadow = true; // default false
  scene.add( pointLight2 );

  //const directionalLight = new THREE.DirectionalLight( 0xfbffc2, 0.5 );
  //directionalLight.position.set( 500, 100, 200 );
  //directionalLight.castShadow = true; // default false
  //scene.add( directionalLight );
  

  // DEV

  // const axesHelper = new THREE.AxesHelper( 5 ); scene.add( axesHelper );
  // controls.update();
  // const shadow_helper = new THREE.CameraHelper( pointLight.shadow.camera );
  // scene.add( shadow_helper );

}

function update() {
  renderer.render(scene, camera);
}



export default {
  init,
  update,
  //createObject,
  scene,
  camera,
  renderer,
  textures
}