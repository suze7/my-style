/*
 * @Author: 苏泽雄
 * @Date: 2020-05-03 13:44:53
 * @LastEditTime: 2020-05-03 15:18:10
 * @LastEditors: 苏泽雄
 * @Description: canvas绘制的相关方法
 * @FilePath: \my-style\src\js\index.js
 */
import canvasData from './canvas';
const data = {
  ...canvasData
};

export function install(Vue, option) {
  Vue.prototype.$commonJS = data;
}

export default {
  install 
}
