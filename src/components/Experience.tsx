import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Experience = () => {
  return (
    <div className="w-full h-dvh overflow-hidden top-0 left-0 fixed">
      <Canvas
        gl={{ pixelRatio: 2 }}
        camera={{
          fov: 45,
          near: 0.001,
          far: 100,
          position: [3, 3, 3],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Experience;
