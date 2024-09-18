import { Scroll, ScrollControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import Bg from './bg'
import { CreditText } from './creditsHtml'

function Scene() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.3)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.25, 0.01)  })

  return (
    <>
    <Bg />
    <ScrollControls pages={1}>
      <Scroll html>
        <CreditText />
      </Scroll>
    </ScrollControls>
    </>
  )
}

export { Scene }
