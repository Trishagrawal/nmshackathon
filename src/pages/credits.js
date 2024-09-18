import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Back from '../components/back'
import { OrbitControls } from '@react-three/drei'
import { Scene } from '../components/creditsScene'

export default function Credit() {
  return (
    <>
    <Back />
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 0] }}>
      
      
      
      
        <Scene />
      
    </Canvas>
    </>
  )
}