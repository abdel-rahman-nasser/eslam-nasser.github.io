// FLOOR
// const floorTexture = new window.THREE.TextureLoader().load('../assets/img/floor.jpg');
const floorWidth = 4;
const floorHeight = 8;
const floorThickness = 0.1;
const floorOffset = -1.5;

// Floor position and size
// floorTexture.wrapS = window.THREE.RepeatWrapping;
// floorTexture.wrapT = window.THREE.RepeatWrapping;
// floorTexture.offset.set(0, 0);
// floorTexture.repeat.set(floorWidth, floorHeight);

// Init floor
// Floor #1
// const geometry = new window.THREE.PlaneGeometry(floorWidth, floorHeight, 1, 1);
// const material = new window.THREE.MeshBasicMaterial({ map: floorTexture });

// Floor #2
// const geometry = new window.THREE.BoxGeometry(floorWidth, floorHeight, floorThickness);
// const material = new window.THREE.MeshBasicMaterial({
//     color: 0x156289,
//     emissive: 0x072534,
//     side: window.THREE.DoubleSide,
//     flatShading: true,
// });
// const floor = new window.THREE.Mesh(geometry, material);
// floor.material.side = window.THREE.DoubleSide;
// floor.rotation.x = Math.PI / 2;
// floor.position.y = -0.01;

// Floor #3
const planeGeometry = new window.THREE.PlaneGeometry(floorWidth, floorHeight / 4, 1, 1);
const planeMaterial = new window.THREE.MeshBasicMaterial({ color: 0xffffff });
const planeMesh = new window.THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.material.side = window.THREE.DoubleSide;
planeMesh.rotation.x = Math.PI / 2;
planeMesh.position.y = -0.01;
planeMesh.position.z = -3 + floorOffset;

const galssGeometry = new window.THREE.BoxGeometry(floorWidth, floorHeight, floorThickness);
const material = new window.THREE.MeshLambertMaterial({
    color: 0xffffff,
    opacity: 0.3,
    transparent: true,
});
const floor = new window.THREE.Mesh(galssGeometry, material);
floor.material.side = window.THREE.DoubleSide;
floor.rotation.x = Math.PI / 2;
floor.position.y = -0.05;
floor.position.z = floorOffset;

const group = new window.THREE.Group();
group.add(floor);
group.add(planeMesh);

export default group;
