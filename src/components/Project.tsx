import { useEffect, useRef } from "react";
import { ThreeBase } from "../three/threeBase.ts";
import { BoxGeometry, Mesh, MeshBasicMaterial} from "three";

const Project = () => {
  const container = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const cameraConfig = {
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000,
    };

    const threeBase = new ThreeBase(container.current, cameraConfig);


    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x44aa88 });
    const cube = new Mesh(geometry, material);

    threeBase.addObjectInScene(cube);
    threeBase.addObjectInScene(cube)

    threeBase.defineCameraPosition({ x: 0, y: 0, z: 5 });

    const handleResize = () => {
      threeBase.resizeRendererToDisplaySize();
    };
    window.addEventListener("resize", handleResize);

    threeBase.startAnimation((delta) => {
      cube.rotation.x += delta;
      cube.rotation.y += delta;
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={container} style={{ width: "100%", height: "100%" }} />;
};

export default Project;
