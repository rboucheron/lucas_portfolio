import { useEffect, useRef } from "react";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const Project = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const cube = new Mesh(
        new BoxGeometry(1, 1, 1),
        new MeshBasicMaterial({ color: 0x00ff00 })
      );
      const canvas = container.current;
      const renderer = new WebGLRenderer({ canvas });

      renderer.setAnimationLoop(animate);

      function animate() {
        renderer.render(scene, camera);
      }

      scene.add(cube);
      camera.position.z = 5;
    }
  }, []);
  
  return <canvas ref={container} />;
};

export default Project;
