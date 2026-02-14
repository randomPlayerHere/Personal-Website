import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center text-terminal">
      <span className="drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">{progress.toFixed(0)}% Loaded</span>
    </Html>
  );
};

export default Loader;
