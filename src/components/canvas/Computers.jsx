import { Suspense,useEffect,useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {

  const computer=useGLTF('./iphone/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.001} groundColor="black"/>
      <pointLight intensity={0.5}/>
      <spotLight 
        position={[0,0,0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile?2:2.5}
        position={isMobile?[0,-2,-3.5]:[5.5,-3,-1]}
        rotation={[0,0,0]}
      />
    </mesh>
  )
}

const Burger = ({isMobile}) => {

  const burger = useGLTF('./burger/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[20,50,-10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={burger.scene}
        scale={isMobile?0.07:.1}
        position={isMobile?[0,-1.7,1]:[0,-2,0]}
        rotation={[0,.5,.5]}
      />
    </mesh>
  )
}

const ComputersCanvas =()=>{

  const[isMobile,setIsMobile]=useState(false);
  
  useEffect(()=>{
    const mediaQuery=window.matchMedia
    ('(max-width:500px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change",
    handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener("change",
      handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
        <Burger isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;