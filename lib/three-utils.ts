import * as THREE from 'three'; // Importing Three.js library

// Function to create a scene
export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0xffffff); // Set background color to white
    return scene;
};

// Function to create a camera
export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a perspective camera
    camera.position.z = 5; // Set camera position
    return camera;
};

// Function to create a renderer
export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer
    renderer.setSize(width, height); // Set the size of the renderer
    return renderer;
};

// Function to add a light to the scene
export const addLight = (scene: THREE.Scene) => {
    const light = new THREE.AmbientLight(0xffffff, 1); // Create ambient light
    scene.add(light); // Add light to the scene
};

// Function to create a basic geometry (e.g., a cube)
export const createCube = () => {
    const geometry = new THREE.BoxGeometry(); // Create box geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Create material with pink color
    const cube = new THREE.Mesh(geometry, material); // Create mesh
    return cube;
};

// Function to animate the scene
export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateLoop = () => {
        requestAnimationFrame(animateLoop); // Request animation frame
        renderer.render(scene, camera); // Render the scene
    };
    animateLoop(); // Start animation loop
}; 

export default {
    createScene,
    createCamera,
    createRenderer,
    addLight,
    createCube,
    animate
};