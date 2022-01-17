import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'


function Sphere(props) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x += 0.01
  })

  return(
    <mesh ref={ref}>
      <sphereGeometry args={[0,0,0]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export const App = () => (
  <>
    <h1>Header</h1>
    <Canvas >
      <Sphere />
    </Canvas>
  </>
)
