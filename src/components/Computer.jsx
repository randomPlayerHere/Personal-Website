import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMotionValue, useSpring } from 'motion/react'


export function Computer(props) {
    const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/retro_computer__low-poly__blockbench (1).glb')
  const { actions } = useAnimations(animations, group)

  // Get target Y from props or default
  const targetY = props.position ? props.position[1] : -1

  // Falling animation with spring
  const yPosition = useMotionValue(5)
  const ySpring = useSpring(yPosition, { damping: 30 })
  useEffect(() => {
    ySpring.set(targetY)
  }, [ySpring, targetY])

  // Track mouse position and rotate model
  useFrame((state) => {
    if (group.current) {
      // Update Y position from spring
      group.current.position.y = ySpring.get()
      // Get mouse position (-1 to 1 range)
      const { x, y } = state.pointer
      // Smoothly rotate model toward cursor (base rotation + mouse offset)
      group.current.rotation.y += (((Math.PI -0.1) / 2 + x * 0.15) - group.current.rotation.y) * 0.1
      group.current.rotation.x += (y * 0.01 - group.current.rotation.x) * 0.1
    }
  })

  useEffect(() => {
    if(animations.length > 0){
        actions[animations[1].name]?.play()
    }
    }, [actions, animations])
  return (
    <group ref={group} {...props} dispose={null}
    scale = {props.scale ||4.5}
    position = {props.position || [3, -1, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.material_0}
        rotation={[0, 0, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material_0}
        rotation={[0, 0, -0.14]}
      />
    </group>
  )
}

useGLTF.preload('/models/retro_computer__low-poly__blockbench (1).glb')
