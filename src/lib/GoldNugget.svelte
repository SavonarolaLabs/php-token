<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

	let container: HTMLDivElement;

	onMount(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			45,
			container.offsetWidth / container.offsetHeight,
			0.1,
			1000
		);
		camera.position.set(0, 0, 1);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		});
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		renderer.setClearColor(0x000000, 0); // Transparent background
		renderer.toneMapping = THREE.LinearToneMapping;
		renderer.toneMappingExposure = 1.0;
		renderer.outputEncoding = THREE.sRGBEncoding;
		container.appendChild(renderer.domElement);

		// Add RoomEnvironment
		const pmremGenerator = new THREE.PMREMGenerator(renderer);
		const environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;
		scene.environment = environment;

		// Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
		directionalLight.position.set(1, 1, 1);
		scene.add(directionalLight);

		// Orbit Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.minDistance = 0.2;
		controls.maxDistance = 0.4;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.5;

		// Animation loop
		function animate() {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		}
		animate();

		// Load model
		const loader = new GLTFLoader();
		loader.load(
			'/gold_nugget.glb',
			(gltf) => {
				const model = gltf.scene;

				// Enhance material for PBR reflections
				model.traverse((child) => {
					if (child instanceof THREE.Mesh && child.material) {
						const material = child.material;
						material.metalness = 1.0;
						material.roughness = 0.4; // Adjust as needed for shininess
						material.envMapIntensity = 1.0;
					}
				});

				scene.add(model);

				// Center and scale the model
				const box = new THREE.Box3().setFromObject(model);
				const center = box.getCenter(new THREE.Vector3());
				const size = box.getSize(new THREE.Vector3());
				model.position.sub(center);

				const maxDim = Math.max(size.x, size.y, size.z);
				if (maxDim > 5) {
					const scale = 5 / maxDim;
					model.scale.set(scale, scale, scale);
				}
			},
			undefined,
			(error) => {
				console.error('Error loading gold nugget model:', error);
			}
		);

		// Handle resize
		const handleResize = () => {
			renderer.setSize(container.offsetWidth, container.offsetHeight);
			camera.aspect = container.offsetWidth / container.offsetHeight;
			camera.updateProjectionMatrix();
		};

		window.addEventListener('resize', handleResize);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
			pmremGenerator.dispose();
		};
	});
</script>

<div
	bind:this={container}
	style="
		position: absolute;
		left: 20px;
		top: 50%;
		width: 300px;
		height: 300px;
		background: transparent;
		border: 0.5px solid white;"
/>
