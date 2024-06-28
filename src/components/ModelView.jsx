import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from 'three';
import Lights from './Lights';
import IPhone from './IPhone';
 import { Suspense } from "react";
 
const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    
    <View
      index={index}
      id={gsapType}
      className={`w-1/2 h-full relative ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]}  />

      <Lights />

      
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 2}
         /*  maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 4} */
          target={new THREE.Vector3(0, 0, 0)}
        //   onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
    
        
      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={ "Loading" }>

            <IPhone
              scale={[15, 15, 15]}
              item={item}
              size={size}
              rotation={[0, Math.PI / -1.1, 0]}
            />
       
        </Suspense>
      </group>
      
    </View>
    
  );
};

export default ModelView;
