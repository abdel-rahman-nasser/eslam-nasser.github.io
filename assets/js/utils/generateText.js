import scene from '../world/scene';

export default function generateText(txt, font) {
    let theText = txt;
    const hash = document.location.hash.substr(1);
    if (hash.length !== 0) {
        theText = hash;
    }
    const geometry = new window.THREE.TextGeometry(theText, {
        font,
        size: 0.5,
        height: 0.05,
    });
    geometry.computeBoundingBox();
    const centerOffset = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
    const materials = [
        new window.THREE.MeshBasicMaterial({
            color: 0xc55509,
            overdraw: 0.5,
        }),
        new window.THREE.MeshBasicMaterial({ color: 0x703208, overdraw: 0.5 }),
    ];
    const modelName = new window.THREE.Mesh(geometry, materials);
    modelName.position.x = centerOffset;
    // modelName.position.y = 1;
    modelName.position.z = 1.5;
    // modelName.rotation.x = 0;
    modelName.rotation.x = Math.PI / -2;
    scene.add(modelName);
}
