import {
    Mesh,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    Clock
} from "three";
import { PerspectiveCameraInterface } from "./interface/perspectiveCamera";
import { CameraPositionInterface } from "./interface/cameraPosition";

export class ThreeBase {
    private readonly scene: Scene;
    private readonly camera: PerspectiveCamera;
    private readonly renderer: WebGLRenderer;
    private readonly clock: Clock;

    constructor(
        canvas: HTMLCanvasElement,
        cameraConfig: PerspectiveCameraInterface
    ) {

        this.scene = new Scene();
        this.camera = new PerspectiveCamera(cameraConfig.fov, cameraConfig.aspect, cameraConfig.near, cameraConfig.far);
        this.renderer = new WebGLRenderer({ canvas });
        this.clock = new Clock();

        this.camera.position.set(0, 0, 5);
    }

    public addObjectInScene(object: Mesh): void {
        this.scene.add(object);
    }

    public defineCameraPosition(position: CameraPositionInterface): void {
        this.camera.position.set(position.x, position.y, position.z);
    }

    public startAnimation(updateCallback?: (delta: number) => void): void {
        const animate = () => {
            const delta = this.clock.getDelta();

            if (updateCallback) {
                updateCallback(delta);
            }

            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(animate);
        };

        animate();
    }

    public resizeRendererToDisplaySize(): void {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width || canvas.height !== height) {
            this.renderer.setSize(width, height, false);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }
    }

    public setBackgroundColor(color: number): void {
        this.renderer.setClearColor(color);
    }
}
