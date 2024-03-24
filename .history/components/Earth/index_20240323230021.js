import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Earth() {
  const containerRef = useRef();

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 1275); // Set camera position to be straight on the earth

    // Create a renderer with a black background
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000); // Black background
    containerRef.current.appendChild(renderer.domElement);

    // Create lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-500, 0, 0); // Lighting from the left side
    scene.add(directionalLight);

    // Load the earth model
    const loader = new GLTFLoader();
    loader.load(
      '/EarthTwoTryGLB.glb',
      function (gltf) {
        const earth = gltf.scene;
        scene.add(earth);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error(error);
      }
    );

    // Enable user control to rotate the earth
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping for smooth dragging
    controls.dampingFactor = 0.25; // Adjust damping factor

    // Render the scene
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the earth slowly along the z-axis
      if (scene.children.length > 0) {
        scene.children[0].rotation.z += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Adjust camera aspect ratio and renderer size on window resize
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", null);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}