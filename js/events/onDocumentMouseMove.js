import { Vector2 } from '../../node_modules/three-full/builds/Three.es';

const mouse = new Vector2();
export default function onDocumentMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}