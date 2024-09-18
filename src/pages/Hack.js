import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Scene } from '../components/HScene'
import Back from '../components/back'


export default function Hack() {
  return (
    <>
    <Back />
    <Canvas>
      <ambientLight />
      <directionalLight color="white" intensity={10} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
    </>
  )
}
