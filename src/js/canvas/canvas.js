/*
 * @Author: szx
 * @Date: 2020-05-03 13:44:53
 * @LastEditTime: 2020-05-03 15:36:42
 * @LastEditors: 苏泽雄
 * @Description: canvas绘制的公用方法
 * @FilePath: \my-style\src\js\canvas\canvas.js
 *
 */

/**
 * @description: 设置render的宽高，以及适配HD-DPI显示器
 * @param {render} renderer render
 * @returns {boolean} Boolean
 */
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = (canvas.clientWidth * pixelRatio) | 0;
  const height = (canvas.clientHeight * pixelRatio) | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

/**
 * @description: 设置相机与render的宽高
 * @param {camera} camera 
 * @param {render} renderer
 * @return: null 
 */
function setCameraSizeFromRender(camera, renderer) {
  if (resizeRendererToDisplaySize(renderer)) {
    let canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

export default {
  resizeRendererToDisplaySize,
  setCameraSizeFromRender
}