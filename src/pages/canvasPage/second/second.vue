<template>
  <div style="padding: 0">
    <canvas class="pub-fill-form" ref="canvasFirst"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      parent: null,
      meshes: [],
      clonemeshes: [],

      cube: []
    };
  },
  mounted() {
    this.draw();
    this.cube.push(
      this.drawBox(0, 0, 0, 0xffff00),
      this.drawBox(-2, 0, 0, 0xff0000),
      this.drawBox(2, 0, 0, 0x0000ff)
    );
    this.camera.position.z = 3;
    this.animate();
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(20, 1, 1, 50000);
      this.camera.position.set(0, 700, 7000);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000104);
      this.scene.fog = new THREE.FogExp2(0x000104, 0.0000675);

      this.camera.lookAt(this.scene.position);

      let loader = new OBJLoader();

      loader.load(1, (object) => {
        // let positions = 
      });
    },
    combineBuffer(model, bufferName) {
      let count = 0;
      model.traverse((child) => {
        if (child.isMesh) {
          let buffer = child.geometry.attributes[bufferName];
          
        }
      });
    },
    draw() {
      this.scene = new THREE.Scene();
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(0, 0, 4);
      this.scene.add(light);
      this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvasFirst
      });
    },
    drawBox(x, y, z, color) {
      let geometry = new THREE.BoxGeometry();
      let material = new THREE.MeshPhongMaterial({ color });
      let cube = new THREE.Mesh(geometry, material);
      cube.position.x = x;
      cube.position.y = y;
      cube.position.z = z;
      this.scene.add(cube);
      return cube;
    },
    // 适配HD-DPI显示器
    resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width = (canvas.clientWidth * pixelRatio) | 0;
      const height = (canvas.clientHeight * pixelRatio) | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    },
    animate() {
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        let canvas = this.renderer.domElement;
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }
      for (let c of this.cube) {
        c.rotation.x += 0.01;
        c.rotation.y += 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    }
  }
};
</script>

<style>
</style>