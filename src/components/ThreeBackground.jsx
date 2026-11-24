import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // 2. Luxury Lighting Setup (for metallic silk reflections)
    const ambientLight = new THREE.AmbientLight(0xFFF0D4, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xFFD700, 2.2);
    dirLight1.position.set(20, 25, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8C583A, 1.6);
    dirLight2.position.set(-20, -15, 10);
    scene.add(dirLight2);

    const goldPointLight = new THREE.PointLight(0xFFE89E, 2.5, 60);
    goldPointLight.position.set(0, 5, 15);
    scene.add(goldPointLight);

    // 3. Floating Gold Amber Particle Dust
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 80;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 35;
      
      // Gentle leftward drift to match ribbon motion
      particleVelocities.push({
        x: -(Math.random() * 0.03 + 0.015),
        y: (Math.random() - 0.5) * 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xD4AF37,
      size: 0.38,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Infinite Right-to-Left Flowing Silk Ribbons
    // We construct 3 continuous quad-strip ribbons that undulate dynamically
    const ribbonConfigs = [
      {
        segments: 140,
        width: 2.6,
        color: 0xD4AF37, // Champagne Gold
        emissive: 0x3d2b07,
        roughness: 0.22,
        metalness: 0.88,
        opacity: 0.65,
        flowSpeed: 1.6, // Right to left speed
        amplitudeY: 4.5,
        freqX: 0.11,
        yOffset: 3.5,
        zOffset: -2,
        twistFreq: 0.18
      },
      {
        segments: 140,
        width: 1.8,
        color: 0x9E6845, // Rose Bronze
        emissive: 0x2e1709,
        roughness: 0.28,
        metalness: 0.82,
        opacity: 0.58,
        flowSpeed: 2.1, // Different right to left speed
        amplitudeY: 4.0,
        freqX: 0.13,
        yOffset: -2.0,
        zOffset: -5,
        twistFreq: 0.22
      },
      {
        segments: 120,
        width: 1.1,
        color: 0xF5E6BE, // Pale Platinum Gold
        emissive: 0x42371a,
        roughness: 0.18,
        metalness: 0.95,
        opacity: 0.72,
        flowSpeed: 1.3,
        amplitudeY: 3.2,
        freqX: 0.15,
        yOffset: 7.0,
        zOffset: -1,
        twistFreq: 0.25
      }
    ];

    const ribbons = ribbonConfigs.map((cfg) => {
      const seg = cfg.segments;
      const vertCount = (seg + 1) * 2;
      const positions = new Float32Array(vertCount * 3);
      const indices = [];

      // Generate index buffer for quad strips
      for (let i = 0; i < seg; i++) {
        const topCurrent = i * 2;
        const btmCurrent = i * 2 + 1;
        const topNext = (i + 1) * 2;
        const btmNext = (i + 1) * 2 + 1;

        indices.push(topCurrent, btmCurrent, topNext);
        indices.push(btmCurrent, btmNext, topNext);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setIndex(indices);

      const mat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.emissive,
        roughness: cfg.roughness,
        metalness: cfg.metalness,
        transparent: true,
        opacity: cfg.opacity,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      return {
        mesh,
        geo,
        cfg,
        positions
      };
    });

    // 5. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. 60FPS Continuous Flow Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const xMin = -42;
    const xMax = 42;
    const xSpan = xMax - xMin;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth camera reaction to mouse
      targetX += (mouseX * 2.5 - targetX) * 0.04;
      targetY += (mouseY * 1.8 - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Animate infinite particles floating leftward
      const posAttr = particleGeo.attributes.position;
      const posArray = posAttr.array;
      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        posArray[i * 3] += vel.x;
        posArray[i * 3 + 1] += Math.sin(t * 1.5 + vel.phase) * 0.02;

        // Wrap particles when they pass left boundary
        if (posArray[i * 3] < -45) {
          posArray[i * 3] = 45;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 50;
        }
      }
      posAttr.needsUpdate = true;

      // Animate ribbons continuously from RIGHT TO LEFT
      ribbons.forEach((ribbon) => {
        const { geo, cfg, positions } = ribbon;
        const seg = cfg.segments;
        const speed = cfg.flowSpeed;

        for (let i = 0; i <= seg; i++) {
          const ratio = i / seg;
          const x = xMin + ratio * xSpan;

          // Wave traveling from right to left: phase increases with (x * freq + t * speed)
          const phase = x * cfg.freqX + t * speed;
          const harmonic = x * (cfg.freqX * 0.5) + t * (speed * 0.7);

          // Centerline of ribbon
          const yCenter = cfg.yOffset + Math.sin(phase) * cfg.amplitudeY + Math.cos(harmonic) * (cfg.amplitudeY * 0.4);
          const zCenter = cfg.zOffset + Math.cos(phase * 0.9) * 3.5 + Math.sin(t * 0.3) * 1.5;

          // Dynamic fluttering twist normal
          const twist = Math.sin(x * cfg.twistFreq + t * (speed * 0.9)) * 0.8;
          const halfW = cfg.width * 0.5;

          const nx = -Math.sin(twist) * 0.3;
          const ny = Math.cos(twist);
          const nz = Math.sin(twist);

          // Top vertex
          const idxTop = i * 2 * 3;
          positions[idxTop] = x + nx * halfW;
          positions[idxTop + 1] = yCenter + ny * halfW;
          positions[idxTop + 2] = zCenter + nz * halfW;

          // Bottom vertex
          const idxBtm = (i * 2 + 1) * 3;
          positions[idxBtm] = x - nx * halfW;
          positions[idxBtm + 1] = yCenter - ny * halfW;
          positions[idxBtm + 2] = zCenter - nz * halfW;
        }

        geo.attributes.position.needsUpdate = true;
        geo.computeVertexNormals();
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      ribbons.forEach((r) => {
        r.geo.dispose();
        r.mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
}
