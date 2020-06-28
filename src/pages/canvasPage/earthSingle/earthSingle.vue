<!--
 * @Author: szx
 * @Date: 2020-04-30 14:21:22
 * @LastEditors: 苏泽雄
 * @LastEditTime: 2020-05-03 21:57:57
 * @Description: 
 * @FilePath: \my-style\src\pages\canvasPage\earthSingle\earthSingle.vue
 -->
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

export default {
  data() {
    return {
      tableData: [],
      params: {
        enableWind: true,
        showBall: false
        // tooglePins: togglePins
      },
      data: null,
      camera: null,
      scene: null,
      renderer: null,
      cube: []
    };
  },
  mounted() {
    this.draw();
    this.cube.push(
      this.drawBox({
        radius: 5,
        widthSegments: 10,
        heightSegments: 10,
        x: 0,
        y: 0,
        z: 0,
        color: 0xffff00,
        material: new THREE.MeshPhongMaterial({ emissive: 0xffff00 }),
        parent: this.scene
      })
    );
    this.cube.push(
      this.drawBox({
        radius: 2,
        widthSegments: 20,
        heightSegments: 20,
        x: 15,
        y: 0,
        z: 0,
        material: new THREE.MeshPhongMaterial({
          color: 0x2233ff,
          emissive: 0x112244
        }),
        parent: this.cube[0]
      })
    );
    const solarSystem = new THREE.Object3D();
    solarSystem.position.x = 15;
    this.cube[0].add(solarSystem);
    this.cube.push(solarSystem);
    this.cube.push(
      this.drawBox({
        radius: 0.5,
        widthSegments: 10,
        heightSegments: 10,
        x: 5,
        y: 0,
        z: 0,
        material: new THREE.MeshPhongMaterial({
          color: 0x888888,
          emissive: 0x222222
        }),
        parent: solarSystem
      })
    );
    this.cube.forEach(node => {
      const axes = new THREE.AxesHelper();
      axes.material.depthTest = false;
      axes.renderOrder = 1;
      node.add(axes);
    });
    this.camera.position.set(0, 50, 0);
    this.camera.up.set(0, 0, 1);
    this.camera.lookAt(0, 0, 0);
    this.animate();
  },
  methods: {
    draw() {
      this.scene = new THREE.Scene();
      const color = 0xffffff;
      const intensity = 3;
      const light = new THREE.PointLight(color, intensity);
      light.position.set(0, 0, 0);
      this.scene.add(light);
      this.camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvasFirst
      });
    },
    drawBox(option) {
      let geometry = new THREE.SphereBufferGeometry(
        option.radius,
        option.widthSegments,
        option.heightSegments
      );
      let cube = new THREE.Mesh(geometry, option.material);
      cube.position.x = option.x;
      cube.position.y = option.y;
      cube.position.z = option.z;
      option.parent.add(cube);
      return cube;
    },
    animate(time) {
      time *= 0.001;
      this.$commonJS.setCameraSizeFromRender(this.camera, this.renderer);
      this.cube.forEach((c, i) => {
        if (i === 0) {
          c.rotation.y = time / 10;
        } else if (i === 1) {
          c.rotation.y = time * 36.5;
        } else if (i === 2) {
          c.rotation.y = time * 1.2;
        }
      });
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    }
  }
};
</script>

<style>
</style>