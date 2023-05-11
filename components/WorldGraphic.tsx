import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from 'react-three-fiber'
import * as THREE from 'three'

const WorldGraphic = (props: ThreeElements['mesh']) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return( 
   <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 :1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default WorldGraphic
