import { Points, Point } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React from 'react'
import * as THREE from 'three'

function Particles({ size = 5000, pages = 3 }) {
  const { width, height } = useThree((state) => state.viewport)
  const sprite = new THREE.TextureLoader().load(
    "https://threejs.org/examples/textures/sprites/disc.png"
  )
  const { scene, camera } = useThree()

  return (
    <>
      {/* Particle system */}
      <Points limit={size}>
        <pointsMaterial
          size={0.05}
          vertexColors
          map={sprite}
        />
        {Array.from({ length: size }).map((_, i) => (
          <Point
            key={i}
            position={[(0.5 - Math.random()) * width * 2, 0.5 * (height * pages) + Math.random() ** 0.25 * (height * pages) * -3, (0.5 - Math.random()) * 25]}
            color={"#02d5fa"} // Color of the points
          />
        ))}
      </Points>

      {/* Apply bloom effect */}
      <EffectComposer>
        {/* Bloom effect */}
        <Bloom
          intensity={2}          // Intensity of the bloom
          luminanceThreshold={0}  // Threshold for bloom to be applied
          luminanceSmoothing={0.9} // Smoothing effect for bloom
        />
      </EffectComposer>
    </>
  )
}

export { Particles }
