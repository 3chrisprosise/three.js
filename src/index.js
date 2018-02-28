import * as THREE from 'three'
import { Stats } from './stats.min'

let scene = new THREE.Scene();
        
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer({
    antialias:true,       //是否开启反锯齿  
    precision:"highp",    //着色精度选择  
    alpha:true,           //是否可以设置背景色透明  
    premultipliedAlpha:false,  
    stencil:false,  
    preserveDrawingBuffer:true, //是否保存绘图缓冲  
    maxLights:1           //maxLights:最大灯光数
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
document.body.appendChild(new Stats())
let geometry = new THREE.CubeGeometry(2,2,2,2,2,2,2,2);
let material = new THREE.MeshLambertMaterial({color: 0xffff00});
let cube = new THREE.Mesh(geometry, material); 

scene.add(cube);

// let light = new THREE.AmbientLight(0xffffff); //添加光源 平行光源对于 Lamber材质作用不大

var light = new THREE.PointLight(0xffffff, 2, 100); //添加点光源 光源并不是必须的。。。
light.position.set(0, 5, 5);
scene.add(light);

camera.position.z = 5;

function render() {
    requestAnimationFrame(render);  //两种制作动画的方式，另一种为 setTimeOut
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}
render();